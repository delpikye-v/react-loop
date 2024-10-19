import React from 'react';
import { ILoopProps, IObjectProps } from './ITypes';
export interface IObjectLoopProps<IObjectProps> extends ILoopProps {
    of?: IObjectProps;
    render?: (value: any, key: string, index: number) => React.ReactNode | JSX.Element | string;
}
export declare const ObjectLoop: React.FC<IObjectLoopProps<IObjectProps>>;
