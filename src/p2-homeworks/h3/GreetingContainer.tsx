import React, {ChangeEvent, MouseEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    };
    const setErrorCallback = (e: MouseEvent<HTMLInputElement>) => {
        setError("")
    }
    const addUser = () => {
        if (name === "") {
            setError("Please, enter username")
        } else {
            addUserCallback(name)
            alert('Hello, ' + name + " !");
            setName("")
        }
    };

    let totalUsers = 0;
    users.map(u => totalUsers++)

    return (
        <Greeting
            name={ name }
            setNameCallback={ setNameCallback }
            setErrorCallback={setErrorCallback}
            addUser={ addUser }
            error={ error }
            totalUsers={ totalUsers }
        />
    );
}

export default GreetingContainer;
