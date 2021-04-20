import React, {useState} from "react";
import SuperSelect from "./common/c5-SuperSelect/SuperSelect";
import SuperRadio from "./common/c6-SuperRadio/SuperRadio";

export type ArrType = Array<string>

const arr: ArrType = ["x", "y", "z"];

function HW7() {
    const [value, onChangeOption] = useState(arr[1]);
    console.log(value)

    return (
        <div>
            <hr/>
            Homework №7
            <div>
                <SuperSelect
                    options={ arr }
                    value={ value }
                    onChangeOption={ onChangeOption }
                />
            </div>
            <div>
                <SuperRadio
                    name={ "radio" }
                    options={ arr }
                    value={ value }
                    onChangeOption={ onChangeOption }
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW7;
