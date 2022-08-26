const initialValues = {
  email: "",
  password: "",
};
export const Logindata = (state = initialValues, action) => {
  switch (action.type) {
    case "LOGIN":
      return {};
    default:
      return state;
  }
};
