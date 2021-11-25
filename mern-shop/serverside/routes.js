const express = require("express");
const cors = require('cors');
const User = require("./models/models");
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const generateAccessToken = (signinData) => {
  return jwt.sign(signinData, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
};

app.put("/reset-password", async (request, response) => {
  const { email } = request.body;
  await User.findOne({ email: email }).then((user) => {
    if (!user && email !== user?.email) {
      response.status(401).send("Email not exists");
      return;
    }

    const JWT_SECRET = "super secret";
    const secret = JWT_SECRET + user.password;

    const payload = {
      email: user.email,
      id: user.id
    };

    const token = jwt.sign(payload, secret, { expiresIn: "100h" });
    const link = `/reset-password/${user.id}/${token}`;
    console.log(link);

    response.status(200).json({ "message": `Reset password link has been sent to ${email}, please check your inbox` });
  });
});

app.post("/reset-password/:id/:token", (request, response) => {
  const { id, token } = request.params;
  const { password } = request.body;
  User.findOne({ _id: id }).then(user => {
    console.log(id, user._id);
    if (id !== user._id) {
      response.send("Invalid id...");
    } else {
      const JWT_SECRET = "super secret";
      const secret = JWT_SECRET + user.password;
      try {
        const payload = jwt.verify(token, secret);
        user.password = password;
        response.status(200).json({ "message": "Password successfully changed" });
      } catch (error) {
        response.status(401).json({ "message": "Something went wrong. Try again please" });
      }
    }
  });
});

app.post("/login", (request, response) => {
  const { username, password } = request.body;
  User.findOne({ username: username }).then((user) => {
    if (user && bcrypt.compare(password, user.password)) {
      const token = generateAccessToken({ username: user.username, password: user.password });
      response.cookie('AccessToken', token, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        secure: true,
        httpOnly: true,
      });
      console.log('successfully logged in');
      response.status(200).header("auth-token", token).json({ "token": token });
    } else {
      console.log("Invalid password");
      response.status(401).send("Invalid Credentials");
    }
  });
});

app.post('/register', async (request, response) => {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = await bcrypt.hash(request.body.password, salt);

  try {
    const emailExists = await User.find({ $or: [{ username: request.body.username }, { email: request.body.email }] });
    if (emailExists.length > 0 && emailExists !== null) {
      console.log("Email already exitsts");
      return response.status(404).json({ message: "Email already exitsts" });
    }

    let user = new User({
      username: request.body.username,
      email: request.body.email,
      password: hashedPassword
    });
    user.save();
    console.log('Successfully registered"');
    response.status(200).json({ message: "Successfully registered" });
  } catch (error) {
    console.log('User not added"');
    response.status(400).json({ message: "User not added" });
  }
});

module.exports = app;