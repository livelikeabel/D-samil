import React from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "FirstFloor";

const FirstFloor = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <div className={cx(`${moduleName}-Template`)}>
        first floor
      </div>
    </div>
  );
};

export default FirstFloor;