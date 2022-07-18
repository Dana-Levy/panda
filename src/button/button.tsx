import React from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className }) => {
    return <div className={`${styles.root} ${className}`}>
        <div className={styles.Button}>
            <p>Button</p>
        </div></div>;
};
