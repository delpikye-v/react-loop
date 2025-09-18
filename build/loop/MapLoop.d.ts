import React from "react";
import { ILoopProps } from "./types";
export interface IMapLoopProps<K = any, V = React.ReactNode> extends ILoopProps {
    of: Map<K, V> | ReadonlyMap<K, V>;
    render?: (value: V, key: K, index: number) => React.ReactNode;
}
export declare function MapLoop<K = any, V = React.ReactNode>({ of, as, propsTagAs, children, render, }: IMapLoopProps<K, V>): React.ReactElement;
