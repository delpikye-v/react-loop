import React from "react";
import { ILoopProps } from "./types";
export interface IObjectLoopProps<T = React.ReactNode> extends ILoopProps {
    of?: Record<string, T>;
    render?: (value: T, key: string, index: number) => React.ReactNode;
}
export declare function ObjectLoop<T = React.ReactNode>({ of, as, propsTagAs, children, render, }: IObjectLoopProps<T>): React.ReactElement;
