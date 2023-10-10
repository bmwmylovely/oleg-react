import React, {ReactNode} from 'react';
import {Button} from "./index";

export interface IncrementButton {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const IncrementButton: React.FunctionComponent<IncrementButton> = ({onClick}) => {
    return (
        <Button onClick={onClick}>
           Добавить
        </Button>
    )
}