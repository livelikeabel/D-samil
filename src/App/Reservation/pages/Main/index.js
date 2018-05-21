import React from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "Main";

const Main = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <div className={cx(`${moduleName}-Template`)}>
        hello
        <br />
        asdf
      </div>
    </div>
  );
};

export default Main;
