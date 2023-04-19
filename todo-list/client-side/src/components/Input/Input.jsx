import { forwardRef } from "react";
import "./styles.scss";
import clsx from "clsx";

const namespace = "input";

export const Input = forwardRef((props, inputRef) => {
  const { value, type, onFocus, onBlur, onChange, disabled } = props;
  const classnames = clsx(namespace);

  return (
    <input
      ref={inputRef}
      className={classnames}
      type={type}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      autoFocus="autofocus"
      disabled={disabled}
      value={value}
    />
  );
});
