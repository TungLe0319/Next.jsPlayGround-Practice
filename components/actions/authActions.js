import Router from "next/router";
import axios from "axios";
// @ts-ignore
import { REGISTER, AUTHENTICATE, DEAUTHENTICATE } from "../types";
// @ts-ignore
import { API } from "../../config";
// @ts-ignore
import { setCookie, removeCookie } from "../../../utils/cookie";

// register user
// @ts-ignore
const register = (
  { firstname, lastname, mobile_no, email_id, password, confirm_password },
  type
) => {
  if (type !== "register") {
    throw new Error("Wrong API call!");
  }
  // @ts-ignore
  return (dispatch) => {
    axios
      .post(`${API}/${type}`, {
        firstname,
        lastname,
        mobile_no,
        email_id,
        password,
        confirm_password,
      })
      .then((response) => {
        Router.push("/signin");
        console.log(response.data.meta.message);
      })
      // @ts-ignore
      .catch((err) => {
        // @ts-ignore
        switch (error.response.status) {
          case 422:
            // @ts-ignore
            alert(error.response.data.meta.message);
            break;
          case 401:
            // @ts-ignore
            alert(error.response.data.meta.message);
            break;
          case 500:
            alert("Interval server error! Try again!");
            break;
          default:
            // @ts-ignore
            alert(error.response.data.meta.message);
            break;
        }
      });
  };
};
