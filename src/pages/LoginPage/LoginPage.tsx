/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

// libarary
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import bind from "classnames/bind";
import { memo } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import i18n from "src/i18n";
import * as yup from "yup";

// src
import { DEFAULT_USER_FORM_DATA, DEFAULT_USER_FORM_LOGIN } from "src/consts";

// types
import { RoutePath, UserLogin } from "src/types";

// hooks
import useAuth from "src/hooks/useAuth";

// api
import { refreshToken, userLogin } from "src/api/serviceApi";

// styles
import styles from "./LoginPage.module.scss";

const cx = bind.bind(styles);

const schema = yup.object({
  username: yup.string().required(i18n.t("validation.required") as string),
});

const LoginPage = memo(() => {
  const { t } = useTranslation();
  const { setAuth, authData, isLoggedIn } = useAuth();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: DEFAULT_USER_FORM_LOGIN,
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();
  const handleLoginUser = (data: any) => {
    loginMuatation.mutate(data, {
      onSuccess: (loginResponse) => {
        if (loginResponse?.data?.accessToken) {
          setAuth({
            accessToken: loginResponse?.data?.accessToken,
            refreshToken: loginResponse?.data?.refreshToken,
          });
          navigate(RoutePath.Home);
        } else {
          navigate(RoutePath.Login);
        }
      },
    });
    reset(data);
  };

  const loginMuatation = useMutation({
    mutationFn: (body: UserLogin) => {
      return userLogin(body);
    },
    onError: (data: any) => {},
    onSuccess: () => {},
  });

  return (
    <div className={cx("login-page")}>
      <div className={cx("login-page__header")}>
        <h1>Sign In</h1>
      </div>
      <div className={cx("login-page__form")}>
        <form onSubmit={handleSubmit(handleLoginUser)}>
          <div className={cx("login-page__form--text")}>
            <p className={cx("title-account")}>Username</p>
            <input type="text" {...register("username")} />
            <p className="mt-1 text-danger">{errors.username?.message}</p>
          </div>
          <button className={cx("login")} type="submit">
            Sing In
          </button>
        </form>
      </div>
    </div>
  );
});

export default LoginPage;
