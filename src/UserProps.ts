import User from './User';

export type UserProps = {
  users: User[],
  currentUser: User,
  updateUser: (id : number, updatedUser : User) => User[],
}