// Usage
// const user1 = new User(1, 'John', 'john@example.com', '123456', true);

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public password: string,
    public isAdmin: boolean
  ) {}
}


