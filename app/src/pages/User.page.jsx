import React, { useState } from 'react';

import './User.page.css';

const User = (props) => {
  const [name, setName] = useState('');

  const onsubmit = () => {
    alert(`Nome informado: ${name}`);
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
        <button className="userPageSearchSubmit" onClick={onsubmit}>
          Buscar
        </button>
      </div>
    );
  };

  return <div className="userPageContainer">{renderSearch()}</div>;
};

export default User;
