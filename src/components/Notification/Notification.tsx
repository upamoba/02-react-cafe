import React from 'react';
import css from './Notification.module.css';

const Notification: React.FC = () => (
  <p className={css.message}>No feedback yet</p>
);

export default Notification;