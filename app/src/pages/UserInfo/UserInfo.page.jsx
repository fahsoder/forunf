import React, { useState } from 'react';

import Api from '../../services/api';

import './UserInfo.page.css';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');
  const [hasUserInfo, setHasUserInfo] = useState(false);

  const renderUserInfo = () => {
    return (
      <div className="userPageInfoContainer">
        <h1 className="userPageTitle"> FORUNF</h1>
        <h1> Apresentando informações do Usuários</h1>

        <p className="userPageUserName">Nome de usuário: {name}</p>
        <img src={image} className="userPageUserImage" />
        <p className="userPageConfirmText">Você é este usuário?</p>
      </div>
    );
  };
  return <div className="userInfoPageContainer">{renderUserInfo()}</div>;
};

export default UserInfo;
