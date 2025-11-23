export type Message = {
  // the id is only from chatter api
  _id?: string;
  from: {
    name: string;
    id: string;
    bio: string;
    verified: boolean;
    permissions: {
      admin: boolean;
      banned: boolean;
    };
    beta: boolean;
    color: string;
    links: unknown[];
    history: {
      joined: number;
    };
  };
  content: string;
  raw?: string; // this is used by aero
  time: string;
};
