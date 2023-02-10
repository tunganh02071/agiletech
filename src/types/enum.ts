export enum RoutePath {
  Home = "/",
  Login = "/login",
  Post = "/profile",
  Register = "/register",
  TaskList = "/tasks",
  UserList = "/users",
  CreateTask = "/tasks/create",
  CreateUser = "/users/create",
  EditTask = "/tasks/:taskId/edit",
  EditUser = "/users/:userId/edit",
  UserDetail = "/users/:userId",
}

export enum Status {
  All = "",
  Todo = "Todo",
  Done = "Done",
  Doing = "Doing",
}
