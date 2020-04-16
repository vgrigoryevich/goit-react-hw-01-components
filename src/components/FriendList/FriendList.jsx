import React from 'react';
import T from 'prop-types';

import FriendListItem from '../FriendListItem/FriendListItem';

import style from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={style.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            key={friend.id}
          />
        );
      })}
    </ul>
  );
};

FriendList.propType = {
  friends: T.array.isRequired,
};

export default FriendList;
