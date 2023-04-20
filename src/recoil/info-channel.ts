import { atom } from "recoil";

interface IInfoUser {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const infoChannel = atom<IInfoUser>({
  key: "infoChannel",
  default: {
    id: 0,
    name: "",
    description: "",
    image: "",
  },
});
