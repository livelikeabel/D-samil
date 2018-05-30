import React from 'react';

import classnames from 'classnames/bind';
import css from './index.scss';

import { Link } from 'react-router-dom';

const cx = classnames.bind(css);
const moduleName = 'Main';

const Main = () => {
  return (
    <div className={cx(`${moduleName}`)}>
      <div className={cx(`${moduleName}-Template`)}>
        <div className={cx(`${moduleName}-Buttons`)}>
          <div className={cx(`${moduleName}-Buttons-Floor`)}>
            <Link to="/first">1 FLOOR</Link>
          </div>
          <div className={cx(`${moduleName}-Buttons-Floor`)}>
            <Link to="/third">3 FLOOR</Link>
          </div>
          <div className={cx(`${moduleName}-Buttons-Userlist`)}>
            <Link to="/list">이용자 목록 보기</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
