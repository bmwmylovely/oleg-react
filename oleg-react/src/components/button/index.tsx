import React, {ReactNode} from 'react';

export interface IButtonProps {
    children: ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

}

export const Button: React.FunctionComponent<IButtonProps> = ({onClick, children}) => {
return (
    <button onClick={onClick} className={'base--button'}>
        {children}
    </button>
)
}
