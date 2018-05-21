import React from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "ThirdFloor";

const ThirdFloor = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <div className={cx(`${moduleName}-Template`)}>
        ThirdFloor
      </div>
    </div>
  );
};

export default ThirdFloor;