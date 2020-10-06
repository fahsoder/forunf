import React, { useState } from 'react';
import Api from '../services/Api';

import './User.page.css';

const User = () => {
  const [name, setName] = useState('');
  const [image] = useState('');

  const onSubmit = () => {
    Api.get(`search-user?user=${name}`).then((response) =>
      console.log(response)
    );
  };

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
        {image ? image : 'SEM IMAGEM'}
      </div>
    );
  };

  return <div className="userPageContainer">{renderSearch()}</div>;
};

export default User;
