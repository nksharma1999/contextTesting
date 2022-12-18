import React from "react";
import { useContextValue } from "../Contexts/TestingContext";
import { C } from "./C";
interface Props{

}
const B: React.FC<Props> = () =>{
    const {increase,decrease,data} = useContextValue();
    return <>
        <h1>Hello B {data}</h1>
        <button onClick={increase}>B +</button>
        <button onClick={decrease}>B -</button>
        <C />
    </>
}
export {B};