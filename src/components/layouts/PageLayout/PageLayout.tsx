/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/button-has-type */
/* eslint-disable no-empty-pattern */

// libarary
import bind from "classnames/bind";
import { memo } from "react";
import { Button, Dropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import {
  AiFillInstagram,
  AiOutlineMessage,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { ImEarth } from "react-icons/im";
import { Link, NavLink, useNavigate } from "react-router-dom";

// types
import { PageLayoutProps, RoutePath } from "src/types";

// component

// styles
import i18next from "i18next";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "src/hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import { userLogout } from "src/api/serviceApi";
import { toast } from "react-toastify";
import styles from "./PageLayout.module.scss";

const cx = bind.bind(styles);

const PageLayout = memo(({ children }: PageLayoutProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { authData, isLoggedIn, clearAuth } = useAuth();

  const logoutUser = useMutation({
    mutationFn: () => {
      return userLogout();
    },
    onError: (data: any) => {},
    onSuccess: () => {
      toast.success(t("logout_success"), {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    },
  });

  const logout = () => {
    logoutUser.mutate(authData.accessToken);
    clearAuth();
    navigate(RoutePath.Home);
  };

  return (
    <div className={cx("page-layout")}>
      <div className={cx("page-layout__header")}>
        <div className="container">
          {/* <div className={cx("page-layout__header--logo")}>
          <button className={cx("page-layout__header--logo")}></button>
          <button className={cx("page-layout__header--logo")}></button>
        </div> */}
          {isLoggedIn ? (
            <div className={cx("button-group")}>
              <a href={RoutePath.Post}>
                <button className={cx("button-sign-in", "profile")}>
                  Profile
                </button>
              </a>
              <button className={cx("button-sign-in")} onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div className={cx("page-layout__header--button")}>
              <Link to={RoutePath.Login}>
                <button className={cx("button-sign-in")}>Sign In</button>
              </Link>
            </div>
          )}
          <div className={cx("page-layout__header--banner")}>
            <img
              className={cx("image-banner")}
              src="https://s3-alpha-sig.figma.com/img/b141/5dac/039cbccbb3a55ae069a3291f512521c8?Expires=1676851200&Signature=fQE6IZGd0GIUDioC0hKmG6fxtvGO364AP5r6jdr46iupg5BcbjbJcsWJavYNgwqe8e2BDQ0mgK6ky3Hdl81hLroQO~9wVQq5II~pGRhe5fqTZpmeXfpvzkp3soL8PAHpQoMMUlDzHghgICsC2~Mwpol8qHzwIzUtqvLQqsFjV4cQWGd4lubRargLy73NFWdhg0E~ueNuL0TGDxmlMDhNwZqejDZugznXru-c-obrKWkSBh46ue-2a~~yri-P-G6iJMG26zndQpDJvhK1-08XyfPPFeNLwLDFzN3HVBEhLODscESNTYQs8Ey1Fj5gkfgCQ0bCki5lbTExunNQaES8UQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="banne"
            />
            <h1 className={cx("title-banner")}>Save your data storage here.</h1>
            <p className={cx("text-banner")}>
              Data Warehouse is a data storage area that has been tested for
              security, so you can store your data here safely but not be afraid
              of being stolen by others.
            </p>
            <button className={cx("buton-banner")}>Learn more</button>
          </div>
        </div>
        <div className={cx("page-layout__body")}>{children}</div>
        <div className={cx("page-layout__footer")}>
          <div className="container">
            <div className={cx("footer-page")}>
              <div className={cx("footer-page__company")}>
                <div className={cx("logo")}>
                  <p>DataWarehouse</p>
                  <span>
                    Warehouse Society, 234 <br />
                    Bahagia Ave Street PRBW 29281
                  </span>
                  <span>
                    info@warehouse.project <br />
                    1-232-3434 (Main)
                  </span>
                </div>
              </div>
              <div className={cx("footer-page__about")}>
                <p>About</p>
                <ul className={cx("list-item")}>
                  <li>Profile</li>
                  <li>Features</li>
                  <li>Careers</li>
                  <li>DW News</li>
                </ul>
              </div>
              <div className={cx("footer-page__help")}>
                <p>Help</p>
                <ul>
                  <li>Support</li>
                  <li>Sign up</li>
                  <li>Guide</li>
                  <li>Reports</li>
                  <li>Q&A</li>
                </ul>
              </div>
              <div className={cx("footer-page__social")}>
                <p>Social Media</p>
                <div className={cx("footer-page__social--list")}>
                  <div className={cx("item")}>
                    <BsFacebook className={cx("icon")} />
                  </div>
                  <div className={cx("item")}>
                    <AiFillInstagram className={cx("icon")} />
                  </div>
                  <div className={cx("item")}>
                    <AiFillTwitterCircle className={cx("icon")} />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx("license")}>
              <div>
                <p>© Datawarehouse™, 2020. All rights reserved.</p>
                <p>Company Registration Number: 21479524.</p>
              </div>
              <div className={cx("icon-license")}>
                <AiOutlineMessage className={cx("icon-message")} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default PageLayout;
