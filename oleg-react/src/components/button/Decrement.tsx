import React, {ReactNode} from 'react';
import {Button} from "./index";

export interface IDecrementButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IDecrementButton: React.FunctionComponent<IDecrementButton> = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            Добавить
        </Button>
    )
}