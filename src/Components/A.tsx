import React from "react";
import { useContextValue } from "../Contexts/TestingContext";
import { B } from "./B";
interface Props{

}
const A: React.FC<Props> = () =>{
    const {data,increase,decrease} = useContextValue();
    return <>
        <h1>Hello A {data}</h1>
        <button onClick={increase}>A +</button>
        <button onClick={decrease}>A -</button>
        <B />
    </>
}
export {A};