import React from "react";

import classnames from "classnames/bind";

import css from "./index.scss";

const cx = classnames.bind(css);
const moduleName = "List";

const List = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <div className={cx(`${moduleName}-Template`)}>
        List
      </div>
    </div>
  );
};

export default List;