import React from "react";
import { useContextValue } from "../Contexts/TestingContext";
interface Props{

}
const C: React.FC<Props> = () =>{
    const {data,increase,decrease} = useContextValue();
    return <><h1>
        Hello C {data}
        </h1>
        <button onClick={increase}>C +</button>
        <button onClick={decrease}>C -</button>
    </>
}
export {C};