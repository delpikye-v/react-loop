import React from 'react';
import { ILoopProps } from './ITypes';
export interface IItemRenderProps extends ILoopProps {
    item: any;
}
export declare const ItemRender: React.FC<IItemRenderProps>;
