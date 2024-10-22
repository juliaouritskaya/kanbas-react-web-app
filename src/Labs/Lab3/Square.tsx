import React, { ReactNode } from "react";
export default function Square({ children }: { children: ReactNode }) {
    const num = Number(children);
    return (
        <div id="wd-square">
            <h4>Square of 4</h4>
            <span>{num * num}</span>
            <hr/>
        </div>
    );
}
