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
import styles from "./Profile.module.scss";

const cx = bind.bind(styles);

const schema = yup.object({
  username: yup.string().required(i18n.t("validation.required") as string),
});

const Profile = memo(() => {
  const { t } = useTranslation();
  return (
    <div className={cx("profile-page")}>
      <div className={cx("profile-page__header")}>
        {/* <div>
            <Form.Select
              className={cx("status-select")}
              value={selectedStatus}
              onChange={(event) => setSelectedStatus(event.target.value)}
            >
              {STATUS_DATA.map((option) => (
                <option key={option.value} value={option.value}>
                  {t(`${option.text}`)}
                </option>
              ))}
            </Form.Select>
          </div> */}
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td colSpan={2}>Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </Table>
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
