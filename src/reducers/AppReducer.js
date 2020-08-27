import axios from "axios";

export default (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {};

    default:
      return state;
  }
};
