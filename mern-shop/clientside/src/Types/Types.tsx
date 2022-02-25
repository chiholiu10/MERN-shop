export type EventTargtProps = {
  target: {
    name: string,
    value: string;
  };
};

export type LoginType = {
  username: string;
  password: string;
};

export type RegisterType = {
  username: string;
  password: string;
  email: string;
};

export type ItemsProps = {
  id: number;
  title?: string;
  description?: number;
  image?: string;
  rating: {
    rate: number;
    count: number;
  },
  price: number;
  quantity: number;
};

export type LoginRequestType = {
  method: string;
  withCredentials: boolean;
  credentials: any;
  headers: {
    'Content-Type': string;
    Accept: string;
  };
  body: string;
};

export type FormProps = {
  email: string;
  subject: string;
  message: string;
};;