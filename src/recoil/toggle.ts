import { atom } from "recoil";

export const toggleSideBar = atom({
  key: "toggleSidebar",
  default: false,
});

export const toggleInfoChannel = atom({
  key: "toggleInfoChannel",
  default: false,
});

export const toggleUser = atom({
  key: "toggleDropdownUser",
  default: false,
});
