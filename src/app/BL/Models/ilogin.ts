export interface ILoginDto {
  userName: string;
  password: string;
}

export interface ILoginRes {
  token: string;
  isToken: boolean;
  expiredDate: Date;
}
