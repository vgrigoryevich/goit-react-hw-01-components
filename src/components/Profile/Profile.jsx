import React from 'react';
import style from './Profile.module.css';

import T from 'prop-types';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={style.profile}>
      <div className={style.description}>
        <img src={avatar} alt={name} className={style.avatar} />
        <p className={style.name}>{name}</p>
        <p className={style.tag}>@{tag}</p>
        <p className={style.location}>{location}</p>
      </div>

      <ul className={style.stats}>
        <li className={style.statsItem}>
          <span className={style.label}>Followers</span>
          <span className={style.quantity}>{followers}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Views</span>
          <span className={style.quantity}>{views}</span>
        </li>
        <li className={style.statsItem}>
          <span className={style.label}>Likes</span>
          <span className={style.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propType = {
  name: T.string.isRequired,
  tag: T.string.isRequired,
  location: T.string.isRequired,
  avatar: T.string.isRequired,
  stats: T.shape({
    followers: T.number.isRequired,
    views: T.number.isRequired,
    likes: T.number.isRequired,
  }).isRequired,
};

export default Profile;
