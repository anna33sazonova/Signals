export interface JwtResponse {
  userName: string;
  token: string
}

export class UserLogin {
  name: string | null | undefined;
  password: string | null | undefined;

  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}

