import React from "react";
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    };
    const priority = props.affair.priority
    return (
        <div className={ priority === "high" ? s.high : priority === "low" ? s.low : s.middle}>
            { props.affair.name }
            <button onClick={ deleteCallback }>X</button>
        </div>
    );
}

export default Affair;
