import React from 'react';
import { ILoopProps } from './types';
export interface IForLoopProps extends ILoopProps {
    of: any[];
    keyName?: string;
    render?: (item: any, index: number) => React.ReactNode;
}
export declare const ForLoop: React.FC<IForLoopProps>;
