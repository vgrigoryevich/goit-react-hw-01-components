import React from 'react';
import T from 'prop-types';

import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}
      <ul className={style.statList}>
        {stats.map(item => {
          return (
            <li
              key={item.id}
              className={style.item}
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className={style.label}>{item.label}</span>
              <span className={style.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propType = {
  title: T.string.isRequired,
  stats: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      label: T.string.isRequired,
      percentage: T.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
