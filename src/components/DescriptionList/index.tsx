import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

export interface Props {
    title: ReactNode;
    data: ReactNode;
}

const DescriptionList = ({ title, data }: Props) => (
    <dl className={styles.descriptionList}>
        <dt>{title}</dt>
        <dd>{data}</dd>
    </dl>
);

export default DescriptionList;
