import React from "react";
import messageStyle from './Message.module.css'
import {UserType} from "./HW1";



function Message(props: UserType) {
	return (
		<div>
			<div className={messageStyle.message}>
				<img src={ props.avatar } className={ messageStyle.image } />
				<div className={messageStyle.text}>
					<div>{props.name}</div>
					<div>{props.message}</div>
					<div>{props.time}</div>
				</div>
			</div>
		</div>
		)}
export default Message;