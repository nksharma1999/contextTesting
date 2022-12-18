import React from "react";
import { useContextValue } from "../Contexts/TestingContext";
import { A } from "./A";
interface Props{
}
const Home: React.FC<Props> = ({})=>{
    const {data,increase,decrease} =useContextValue();
    return <>
        <h1>Hello Home {data}</h1>
        <button onClick={increase}>Home +</button>
        <button onClick={decrease}>Home -</button>
        <A />
        </>
}
export {Home};