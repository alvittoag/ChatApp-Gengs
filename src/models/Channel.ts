export interface IResChannel {
  name: string;
  id: number;
  image: string;
  description: string;
  messages_info: IMessagesInfo[];
}

export interface IMessagesInfo {
  id: number;
  message: string;
  user: { username: string };
}
