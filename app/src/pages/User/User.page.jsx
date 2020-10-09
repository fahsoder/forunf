import React, { useState } from 'react';
import Api from '../../services/api';

import './User.page.css';

const User = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');
  const [hasUserInfo, setHasUserInfo] = useState(false);

  const onSubmit = () => {
    Api.get(`search-user?user=${name}`).then((response) => {
      if (response.data.success) {
        setUserId(response.data.userId);
        setImage(response.data.profileImage);
      }
      setHasUserInfo(response.data.success);
    });
  };

  const confirmUser = () => {
    // Buscar informações de seguidores na API
    // localhost:5000/get-user-info?userId=${userId}
    return;
  };

  const doNotConfirmUser = () => {
    // Buscar o próximo usuário
    // chamar o endpoint do onSubmit novamente com um parâmetro a mais
    // search-user?user=${name}&page=1
    return;
  };

  const renderUserInfo = () => {
    if (hasUserInfo) {
      return (
        <div className="userPageInfoContainer">
          <p className="userPageUserName">{name}</p>
          <img src={image} className="userPageUserImage" />
        </div>
      );
    }
    return;
  };

  const renderSearch = () => {
    return (
      <div className="userPageSearchContainer">
        <div className="userPageLogoContainer">
          <img id="logo" />
        </div>
        <input
          type="text"
          name="userSearch"
          className="userPageSearchInput"
          placeholder="Nome de usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="userPageSubmit" onClick={onSubmit}>
          Buscar
        </button>
        {renderUserInfo()}
      </div>
    );
  };

  return <div className="userPageContainer">{renderSearch()}</div>;
};

export default User;
