/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-plusplus */
/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/rules-of-hooks */
import axios from "axios";
import {
  ITaskFormData,
  IUserFormData,
  Task,
  Testimonials,
  User,
  UserCreate,
  UserSignIn,
} from "src/types";

function getCookie(cname: any) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
const headerToken = getCookie("accessToken");
const apiClient = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-type": "application/json",
  },
});

const apiAgileTech = axios.create({
  baseURL: "https://test-react.agiletech.vn/",
  headers: {
    "Content-type": "application/json",
  },
});

export const getTestimonials = (galleries: string) =>
  apiAgileTech.get<Testimonials>(`${galleries}`);

export const getTasks = (
  params:
    | {
        currentPage: number;
        limit: number;
        debouncedSearchHook: string;
        selectedStatus: string;
      }
    | {
        currentPage: number;
        limit: number;
        debouncedSearchHook: string;
        selectedStatus?: undefined;
      },
) => {
  return apiClient.get<Task>(`/tasks`, {
    params: {
      _page: params.currentPage,
      _limit: params.limit,
      q: params.debouncedSearchHook,
      status: params.selectedStatus,
    },
  });
};

export const getUser = (
  params:
    | {
        currentPage: number;
        limit: number;
        debouncedSearchHook: string;
      }
    | {
        currentPage: number;
        limit: number;
        debouncedSearchHook: string;
      },
) => {
  return apiClient.get<User>(`/users`, {
    params: {
      _page: params.currentPage,
      _limit: params.limit,
      q: params.debouncedSearchHook,
    },
  });
};

export const addtask = (task: ITaskFormData) =>
  apiClient.post<Task>("/tasks", task);

export const getAssignee = () => apiClient.get(`/users`);

export const getTask = (taskId: string) =>
  apiClient.get<Task>(`tasks/${taskId}`);

export const updateTask = (taskId: string, task: Task) =>
  apiClient.put<Task>(`tasks/${taskId}`, task);

export const getUserId = (userId: string) =>
  apiClient.get<User>(`users/${userId}`);

export const updateUser = (userId: string, user: IUserFormData) =>
  apiClient.put<User>(`users/${userId}`, user);

export const deleteTask = (id: number) => apiClient.delete<Task>(`tasks/${id}`);

export const deleteUser = (id: number) => apiClient.delete(`users/${id}`);

export const createUser = (user: UserCreate) =>
  apiClient.post("/register", user);

export const userLogin = (user: UserSignIn) =>
  apiAgileTech.post("auth/login", user);
export const refreshToken = (token: string) =>
  apiAgileTech.post("auth/refresh-token", token);

export const userLogout = () => apiAgileTech.delete("auth/logout");

export const getPost = () =>
  apiClient.get(`posts`, {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwidXNlcm5hbWUiOiJhZG1pbjEiLCJpYXQiOjE2NzYxMjU2OTEsImV4cCI6MTY3NjIxMjA5MX0.78BO-rNEi_1O4ZedLmKBGJBMaVVEUVKoLeSgN7ZxcLY",
    },
  });
