import React from "react";
import { connect } from "react-redux";
import Pidgeon from "./Pidgeon";
import {removePidgeon} from "./redux/";

function List(props){
    const { pidgeons, removePidgeon } = props;
    return(
    <div>
        {pidgeons.map((pidgeons, i) => <Pidgeon 
        {...pidgeons}removePidgeon= 
        {removePidgeon} index={i} />)}
    </div>
    )
}

export default connect(state => ({pidgeons: state}), {removePidgeon}) (List);