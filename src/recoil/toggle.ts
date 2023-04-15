import { atom } from "recoil";

export const toggleSideBar = atom({
  key: "sidebar",
  default: false,
});

export const toggleInfoUser = atom({
  key: "infoUser",
  default: false,
});

export const toggleUser = atom({
  key: "dropdownUser",
  default: false,
});
