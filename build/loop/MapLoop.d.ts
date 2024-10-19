import React from 'react';
import { ILoopProps } from './ITypes';
export interface IMapLoopProps extends ILoopProps {
    of: Map<any, any> | ReadonlyMap<any, any>;
    render?: (value: any, key: any, index: number) => React.ReactNode | JSX.Element | string;
}
export declare const MapLoop: React.FC<IMapLoopProps>;
