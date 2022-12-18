
import React, { createContext, useContext, useState } from "react";

type contextType  ={
    data:number;
    increase: () => void;
    decrease: () => void;
}
interface Props{
    children: React.ReactNode
}
const CreateContext = createContext<contextType|null>(null);

const ContextProvider: React.FC<Props>=({children}:Props)=>{
    const [data,setData] = useState<number>(0);
    const increase = () =>{
        setData(data+1);
    }
    const decrease = () =>{
        setData(data-1);
    }
    return <CreateContext.Provider value={{data,decrease,increase}}>{children}</CreateContext.Provider>
}


function useContextValue (){
    const context = useContext(CreateContext);

    if(!context) throw new Error("Out Of Context Provider");
    return context;
}
export {ContextProvider,useContextValue};