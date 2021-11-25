export const AuthenticationCheck = {
  isAuthenticated: false,
  signin(cb: any) {
    AuthenticationCheck.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb: any) {
    AuthenticationCheck.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};