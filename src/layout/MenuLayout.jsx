import Menu from "../components/menu";
import React from "react";


const MenuLayout = ({children}) =>{
    return(
        <div style={{width: '100%', height: '100%'}}>
            <div><Menu/></div>
            <div style={{width: '100%', height: '100%'}}>{children}</div>
        </div>
    )
}
export default MenuLayout