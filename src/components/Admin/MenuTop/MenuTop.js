import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'antd';
import AreyesLogo from '../../../assets/img/png/logo.png'
import { logout } from '../../../api/auth';

import './MenuTop.scss'

export default function MenuTop(props) {
  const { menuCollapsed, setMenuCollapsed } = props;

  const logoutUser = () => {
    logout();
    window.location.reload();
  }

  return (
    <div className="menu-top">
      <div className="menu-top__left">
        <Link to={"/admin"}>
          <img
            className="menu-top__left-logo"
            src={AreyesLogo}
            alt="Andres Reyes"
          />
        </Link>
        <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
          <Icon type={menuCollapsed ? "menu-unfold" : "menu-fold"} />
        </Button>
      </div>
      <div className="menu-top__right" onClick={logoutUser}>
        <Button type="link">
          <Icon type="poweroff" />
        </Button>
      </div>
    </div>
  )
};
