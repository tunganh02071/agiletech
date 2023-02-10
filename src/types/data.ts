import { Status } from "./enum";

export interface Testimonials {
  id: string;
  imageUrl: string;
  description: string;
}

export interface UserSignIn {
  email: string;
}

export interface Task {
  id: number | undefined;
  startTime: string;
  endTime: string;
  assignee: string;
  progress: string;
  title: string;
  status: Status;
}

export interface Assignee {
  id: number | undefined;
  name: string;
  value: string;
}

export interface Option {
  label: string;
  value: any;
}

export interface ITaskFormData {
  startTime: string;
  endTime: string;
  assignee: string;
  progress: string;
  title: string;
  status: Status;
}

export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface UserEdit {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface UserCreate {
  username: string;
  email: string;
  password: string;
}
export interface UserCreateAccount {
  username: string;
  email: string;
  password: string;
  passwordrepeat: string;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface IUserLogin {
  username: string;
}

export interface IUserFormData {
  username: string;
  email: string;
  password: string;
}

export interface IUserEdit {
  username: string;
  email: string;
}

export interface AuthData {
  refreshToken: string;
  accessToken: string;
}
