export const Loginaction = (u, p) => {
  console.log("login action call");
  return {
    type: "LOGIN",
    payload: { username: u, password: p },
  };
};
