import React from "react";
import altenativeMessageStyle from './AlternativeMessage.module.css'
import {DataType} from "./HW1";

function AlternativeMessage(props: DataType) {
	return (
		<div>
			<div className={altenativeMessageStyle.message}>
				<div className={altenativeMessageStyle.text}>
					<div>{props.data.name}</div>
					<div>{props.data.message}</div>
					<div>{props.data.time}</div>
				</div>
				<img src={props.data.avatar} className={altenativeMessageStyle.image} ></img>
			</div>
		</div>
	);
}

export default AlternativeMessage;
