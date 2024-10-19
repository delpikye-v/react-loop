import React from 'react';
import { ILoopProps } from './ITypes';
export interface ISetLoopProps extends ILoopProps {
    of: Set<any>;
    render?: (item: any, index: number) => React.ReactNode | JSX.Element | string;
}
export declare const SetLoop: React.FC<ISetLoopProps>;
