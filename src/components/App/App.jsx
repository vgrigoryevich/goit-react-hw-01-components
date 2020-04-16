import React from 'react';

import style from './App.module.css';

import user from '../../json/user.json';
import Profile from '../Profile/Profile';

import friends from '../../json/friends.json';
import FriendList from '../FriendList/FriendList';

import stats from '../../json/statistical.json';
import Statistics from '../Statistics/Statistics';

import transactions from '../../json/transactions.json';
import Transactions from '../Transactions/Transactions';

const App = () => {
  return (
    <div className={style.profile}>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <FriendList friends={friends} />
      <Statistics title={'Upload stats'} stats={stats} />
      <Transactions transactions={transactions} />
    </div>
  );
};

export default App;
