import { Api } from "../../utils/api";

export const LogOut = async () => {
  console.log("logout");
  localStorage.removeItem("bearer");
  localStorage.removeItem("id");
  await Api.get("users/logout");
};
