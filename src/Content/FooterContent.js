import React from "react";
import { H4 } from "@blueprintjs/core";

export default class FooterContent extends React.Component{
   constructor(props){
       super(props)
   }
    render(){
        return(
            <>
            <H4>Возникли вопросы? Звоните по номеру: <a href="#">+7 495 234 44 33</a></H4>

            </>
        )
    }
}