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
  brandName: string;
  colour?: string;
  colourWayId?: number;
  id: number;
  imageUrl: string;
  isSellingFast: boolean;
  name: string;
  price: {
    currency: string,
    current: {
      value: number;
      text: string;
    },
    productCode: number;
    productType: string;
    url: string;
  };
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
};