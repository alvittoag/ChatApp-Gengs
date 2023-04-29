import { atom } from "recoil";

interface IInfoChannel {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const infoChannel = atom<IInfoChannel>({
  key: "infoChannel",
  default: {
    id: 0,
    name: "",
    description: "",
    image: "",
  },
});
