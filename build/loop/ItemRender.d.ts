import React from "react";
import { ILoopProps } from "./types";
export interface IItemRenderProps extends ILoopProps {
    item: React.ReactNode;
}
declare const ItemRender: React.FC<IItemRenderProps>;
export default ItemRender;
