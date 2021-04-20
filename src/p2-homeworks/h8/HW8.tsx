import React, {useState} from "react";
import {homeWorkReducer} from "./bll/homeWorkReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type InitialPeopleType = {
    _id: number
    name: string
    age: number
}

export type ActionType = {
    type: string
    payload: string | number
}

const initialPeople: InitialPeopleType[] = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={ p._id }>
            { p.name + ", " + p.age}
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const check = () => setPeople(homeWorkReducer(initialPeople, {type: "check", payload: 18}))
    return (
        <div>
            <hr/>
            Homework №8
            { finalPeople }
            <div><SuperButton onClick={ sortUp }>sort up</SuperButton></div>
            <div><SuperButton onClick={ sortDown }>sort down</SuperButton></div>
            <div><SuperButton onClick={ check }>check 18</SuperButton></div>
            <hr/>
        </div>
    );
}

export default HW8;
