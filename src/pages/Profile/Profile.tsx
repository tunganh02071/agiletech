/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable @typescript-eslint/no-use-before-define */

// libarary
import bind from "classnames/bind";
import { memo } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTranslation } from "react-i18next";
import i18n from "src/i18n";
import * as yup from "yup";

// src

// types

// hooks

// api

// styles
import { InputGroup, Table } from "react-bootstrap";
import { useQuery } from "@tanstack/react-query";
import { getPost } from "src/api/serviceApi";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import styles from "./Profile.module.scss";

const cx = bind.bind(styles);

const schema = yup.object({
  username: yup.string().required(i18n.t("validation.required") as string),
});

const Profile = memo(() => {
  const { t } = useTranslation();

  const { data, isLoading, refetch }: any = useQuery({
    queryKey: ["post"],
    queryFn: () => getPost(),
  });
  console.log(data);
  return (
    <div className={cx("profile-page")}>
      <div className={cx("profile-page__header")}>
        <div className={cx("profile-page__header--text")}>
          <p>Post</p>
          <p>Logout</p>
        </div>
      </div>
      <div className={cx("profile-page__body")}>
        <div className={cx("profile-page__body--top")}>
          <div className={cx("button")}>
            <button className={cx("button-add")}>Add new</button>
          </div>
          <div className={cx("box")}>
            <input type="text" placeholder="Title" />
            <select name="tags" id="tags">
              <option value="">Tags</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
        <div className={cx("profile-page__body--table")}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Acition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>ABC</td>
                <td>Description</td>
                <td>HTML, CSS</td>
                <td>
                  <FiEdit2 className={cx("button-edit")} />
                  <AiFillDelete />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>ABC</td>
                <td>Description</td>
                <td>HTML, CSS</td>
                <td>
                  <FiEdit2 className={cx("button-edit")} />
                  <AiFillDelete />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>ABC</td>
                <td>Description</td>
                <td>HTML, CSS</td>
                <td>
                  <FiEdit2 className={cx("button-edit")} />
                  <AiFillDelete />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>ABC</td>
                <td>Description</td>
                <td>HTML, CSS</td>
                <td>
                  <FiEdit2 className={cx("button-edit")} />
                  <AiFillDelete />
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>

      {/* <div className={cx("profile-page__footer")}>
          <TablePanigation
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />‚
        </div> */}
    </div>
  );
});

export default Profile;
