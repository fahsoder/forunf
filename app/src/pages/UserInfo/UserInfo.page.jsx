// eslint-disable-next-line
import React, { useState } from 'react';
//Import SVGs
import { ReactComponent as ArrowDown} from '../../assets/svg/arrow-down.svg';
import { ReactComponent as BrokenHeart} from '../../assets/svg/broken-heart 1.svg';
import { ReactComponent as Eye} from '../../assets/svg/eye.svg';
import { ReactComponent as Film} from '../../assets/svg/film.svg';
import { ReactComponent as Heart} from '../../assets/svg/heart.svg';
import { ReactComponent as Slash} from '../../assets/svg/slash.svg';
import { ReactComponent as Xoctagon} from '../../assets/svg/x-octagon.svg';
import { ReactComponent as Block } from '../../assets/svg/block.svg';


import Api from '../../services/api';

import './UserInfo.page.css';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [userId, setUserId] = useState('');
  const [image, setImage] = useState('');
  
  Api.get(`search-user?user=${name}`).then((response) => {
    setUserId(response.data.userId);
    setName(response.data.username);
    setImage(response.data.profileImage);
    console.log(response.data);
  });

  

  const renderUserInfo = () => {
    return (
      <div className="userPageInfoContainer">
        <img id="logo"/>
        <h1> Apresentando informações do Usuários</h1>
        <ul className="UserListInfo">
          <li>
            <li><BrokenHeart /></li>
            <li><p>Não seguindo você de volta</p></li>
          </li>
          <li>
            <li><Slash /> </li>
            <li><p>Usuários que bloqueram você:</p></li>
          </li>
          <li>
            <li><ArrowDown /></li>
            <li><p>Seguidores Perdidos</p></li>
          </li>
          <li>
            <li><Eye /></li>
            <li><p>Visualizadores de perfil</p></li>
          </li>
          <li>
            <li><Film /></li>
            <li><p>Visualizadores de suas Histórias</p></li>
          </li>
          <li>
            <li><Xoctagon /></li>
            <li><p>Pesoas que você não seguiu de volta</p></li>
          </li>
          <li>
            <li><Heart /></li>
            <li><p>Postagens que foram mais curtidas</p></li>
          </li>
        </ul>
        <p className="userPageUserName">Nome de usuário: {name}</p>
        
        <p /*className="userPageConfirmText"*/>Você é este usuário?</p>
      </div>
    );
  };
  return <div className="userInfoPageContainer">{renderUserInfo()}</div>;
};

export default UserInfo;
