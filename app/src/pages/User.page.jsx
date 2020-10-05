import React from 'react'

import './User.page.css';

const User = props => {

    const onsubmit = () => {
        alert('clicado');
    }

    const renderSearch = () => {
        return (
            <div className='searchContainer'>
                <label className='userPageSearchLabel'>Nome de usuário</label>
                <input type='text' name='userSearch' className='userPageSearchInput' placeholder='@fahsoder' />
                <button className='userPageSearchSubmit' onClick={onsubmit}>Buscar</button>
            </div>
        )   
    }


    return (
        <div className='userPageContainer'>
            {renderSearch()}
        </div>
    )
}

export default User;