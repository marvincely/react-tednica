import React from 'react';
import './styles.scss';
import clsx from 'clsx';

const namespace = 'button';

export const Button = (props) => {
  const { text = '', kind, className, type = 'button', onClick, disabled } = props;
  const classnames = clsx(namespace, className, {
    [`${namespace}__${kind}`]: kind,
  });

  return (
    <button className={classnames} onClick={onClick} type={type} disabled={disabled}>
      {text}
    </button>
  );
};
