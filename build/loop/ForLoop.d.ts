import React from 'react';
import { ILoopProps } from './ITypes';
export interface IForLoopProps extends ILoopProps {
    of: any[];
    render?: (item: any, index: number) => React.ReactNode | JSX.Element | string;
}
export declare const ForLoop: React.FC<IForLoopProps>;
