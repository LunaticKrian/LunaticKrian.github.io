import type {ReactNode} from "react";
import Mermaid from "@theme/Mermaid";

export default function MermaidChart(props: { mermaidData: string }): ReactNode {
    return (
        <div style={{maxHeight: '400px', overflow: 'auto'}}>
            <Mermaid value={props.mermaidData}/>
        </div>
    )
}