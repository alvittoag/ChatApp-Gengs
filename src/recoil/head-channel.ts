import { atom } from "recoil";

interface IHeadChannel {
  name: string;
  image: string;
}

export const headChannel = atom<IHeadChannel>({
  key: "headChannel",
  default: {
    name: "",
    image: "",
  },
});
