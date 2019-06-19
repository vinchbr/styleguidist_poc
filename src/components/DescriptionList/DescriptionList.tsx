import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

export interface Props {
  /**
   * Title of the column you are trying to display
   * @param title
   */
  title: ReactNode;
  /**
   * Usually an HTML tag with content
   * @param data
   */
  data: ReactNode;
}

const DescriptionList = ({ title, data }: Props) => (
  <dl className={styles.descriptionList}>
    <dt>{title}</dt>
    <dd>{data}</dd>
  </dl>
);

export default DescriptionList;
