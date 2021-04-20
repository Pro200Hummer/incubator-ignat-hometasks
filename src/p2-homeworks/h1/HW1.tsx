import React from "react";
import AlternativeMessage from "./AlternativeMessage";
import Message from "./Message";

export type UserType = {
	avatar: string
	name: string
	message: string
	time: string
}
export type DataType = {
	data:UserType
}

export const messageData = [
    {
        avatar: "https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",
        name: "Pavel",
        message: "Hello! I did my homework!",
        time: "22:00"
    },
    {
        avatar: "https://download-cs.net/steam/avatars/3412.jpg",
        name: "Ignat",
        message: "Hello! Wonderful!",
        time: "22:05"
    }
];


function HW1() {
    return (

        <div>
            <Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}
            />
            <AlternativeMessage data={messageData[1]}/>
            <hr/>
        </div>
    );
}

export default HW1;
