// ** Import Models
import { IUser } from "../models/user";

export const userLocalStorage = () => {
  const userObj: any = localStorage.getItem("user");

  const userInfo: IUser = JSON.parse(userObj);

  return userInfo;
};
