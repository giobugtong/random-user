export type Name = {
  title: string;
  first: string;
  last: string;
};

export type Picture = {
  medium: string;
  large: string;
};

export type User = {
  name: Name;
  email: string;
  picture: Picture;
};

export type ApiResponnse = {
  results: User[];
  info: PageInfo;
};

export type PageInfo = {
  page: number;
  reuslts: number;
  seed: string;
};

export type GetUsersRequest = {
  seed?: string;
  page?: string;
};
