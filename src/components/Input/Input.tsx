/*
 A render function that should be used as a component in a redux form.
 */
import React from "react";
import styles from "./styles.module.scss";

/**
 *
 * @param input
 * @param placeholder
 * @param type
 * @param touched
 * @param error
 * @param className
 * @constructor
 */
const Input = ({
  input,
  placeholder,
  type,
  meta: { touched, error },
  className
}: any) => (
  <div className={styles.input}>
    <input
      className={className}
      {...input}
      placeholder={placeholder}
      type={type}
    />
    {touched && (error && <i className="text-danger">{error}</i>)}
  </div>
);

export default Input;
