import React, { useState } from 'react';
import Api from '../services/api';

import './User.page.css';

const User = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');
  const [hasUserInfo, setHasUserInfo] = useState(false);

  const onSubmit = () => {
    Api.get(`search-user?user=${name}`).then((response) => {
      if (response.data.success) {
        setUserId(response.data.userId)
        setImage(response.data.profileImage)
      }
      setHasUserInfo(response.data.success)
    });
  };

  const confirmUser = () => {
    // Buscar informações de seguidores na API
    // localhost:5000/get-user-info?userId=${userId}
    return
  }

  const doNotConfirmUser = () => {
    // Buscar o próximo usuário
    // chamar o endpoint do onSubmit novamente com um parâmetro a mais
    // search-user?user=${name}&page=1
    return
  }

  const renderUserInfo = () => {
    if (hasUserInfo) {
      return (
        <div className="userPageInfoContainer">
          <p className="userPageUserName">Nome de usuário: {name}</p>
          <img src={image} className="userPageUserImage" />
          <p className="userPageConfirmText">Você é este usuário?</p>
          <button className="userPageConfirmUser" onClick={confirmUser}>Confirmar</button>
          <button className="userPageDoNotConfirmUser" onClick={doNotConfirmUser}>Não</button>
        </div>
      )
    }
    return
  }

  const renderSearch = () => {
    return (
      <div className="userPageSearchContainer">
        <label className="userPageSearchLabel">Nome de usuário</label>
        <input
          type="text"
          name="userSearch"
          className="userPageSearchInput"
          placeholder="@fahsoder"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="userPageSearchSubmit" onClick={onSubmit}>
          Buscar
        </button>
        {renderUserInfo()}
      </div>
    );
  };

  return <div className="userPageContainer">{renderSearch()}</div>;
};

export default User;
