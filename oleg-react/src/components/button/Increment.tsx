import React, {ReactNode} from 'react';
import {Button} from "./index";

export interface IIncrementButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IIncrementButton: React.FunctionComponent<IIncrementButton> = ({onClick}) => {
    return (
        <Button onClick={onClick}>
            Убавить
        </Button>
    )
}