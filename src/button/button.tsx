import React from 'react';
import styles from './button.module.scss';

export interface ButtonProps {
    className?: string;
    text: string;
    type: 'primary'|'secondary';
    disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ className,type,text }) => {
    return (
    <div className={`${styles.root} ${className}`}>
        <div className={type === 'primary' ? styles.primary : styles.secondary}>
            {text}
        </div>
    </div>)
};
