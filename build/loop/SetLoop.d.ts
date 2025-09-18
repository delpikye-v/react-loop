import React from "react";
import { ILoopProps } from "./types";
export interface ISetLoopProps extends ILoopProps {
    of: Set<any>;
    render?: (item: any, index: number) => React.ReactNode;
}
export declare const SetLoop: React.FC<ISetLoopProps>;
