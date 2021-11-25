export const types = {
  GET_TOKEN: "GET_TOKEN"
};

export const getToken = (token: string) => ({
  type: types.GET_TOKEN,
  token
});