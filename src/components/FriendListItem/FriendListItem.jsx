import React from 'react';
import T from 'prop-types';

import style from './FriensListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const isOnlineClass = isOnline ? style.active : style.disabled;
  return (
    <li className={style.item}>
      <span className={isOnlineClass}></span>
      <img className={style.avatar} src={avatar} alt={name} />
      <p className={style.name}>{name}</p>
    </li>
  );
};

FriendListItem.propType = {
  avatar: T.string.isRequired,
  name: T.string.isRequired,
  isOnline: T.bool.isRequired,
  id: T.number.isRequired,
};
export default FriendListItem;
