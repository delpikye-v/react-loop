import { JSX } from "react";
import { BooleanResult } from "react-ifz";
export interface IObjectProps {
    [key: string]: any;
}
export interface ILoopProps {
    as?: keyof JSX.IntrinsicElements;
    propsTagAs?: IObjectProps;
    children?: React.ReactNode;
}
export interface ILoopConditionProps extends ILoopProps {
    condition: (() => BooleanResult) | BooleanResult;
    render?: (index: number) => React.ReactNode | JSX.Element | string;
}
