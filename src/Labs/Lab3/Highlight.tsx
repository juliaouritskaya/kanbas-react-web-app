import {ReactNode} from "react";

export default function Highlight({children}: { children: ReactNode }) {
    return (
        <div>
            <h4>Highlight</h4>
            <span id="wd-highlight" style={{backgroundColor: "yellow", color: "red"}}>
      {children}
    </span>
            <hr/>
        </div>
    );
}

