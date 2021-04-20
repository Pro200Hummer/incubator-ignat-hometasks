import React, {ChangeEvent, MouseEvent} from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    setErrorCallback: (e: MouseEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, setErrorCallback} // деструктуризация пропсов
) => {
    const inputClass = (error === "Please, enter username") ? s.error : s.notError;


    return (
        <div>
            <input value={ name } onChange={ setNameCallback } onClick={setErrorCallback} className={ inputClass }/>
            <span>{ error }</span>
            <button onClick={ addUser }>add</button>
            <span>{ totalUsers }</span>
        </div>
    );
}

export default Greeting;
