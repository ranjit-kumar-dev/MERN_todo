import React from 'react';
import classes from './layout.module.scss';

function layout({ children }) {
  return (
    <main className={classes.container}>{children}</main>
  );
}

export default layout;
