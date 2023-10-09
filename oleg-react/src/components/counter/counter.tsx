import React from 'react';

export interface ICounterProps {
    value: number;
}

export const Counter: React.FunctionComponent<ICounterProps> = ({value}) => {
    return (
        <div className={'circle'}>
            {value}
        </div>
    )
}