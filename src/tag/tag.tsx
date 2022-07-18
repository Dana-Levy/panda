import React from 'react';
import styles from './tag.module.scss';

export interface TagProps {
    className?: string;
}

export const Tag: React.FC<TagProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <p>Tag</p></div>;
};
