import React, {memo} from 'react';
import {DefaultButton} from "../../providers/ThemeProvider/themeStyles";

interface ButtonProps {
    className?: string;
    id?: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    style?: React.CSSProperties
}

export const Button: React.FC<ButtonProps> = memo( ({ className, id, onClick, children, style }) => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        onClick(event);
    };

    return (
        <DefaultButton
            onClick={handleClick}
            id={id}
            className={className}
            style={style}
        >
            {children}
        </DefaultButton>
    );
});
