import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {ArrType} from "../h7/HW7";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme} from "./bll/themeReducer";


const themes: ArrType = ['dark', 'red', 'some', 'green'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(state => state.theme.theme)

    const dispatch = useDispatch()

    const themeChanger = (themeValue: string) => {
        dispatch(changeTheme(themeValue))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                Homework №12
            </span>
            <div>
                <SuperSelect
                    options={themes}
                    onChangeOption={themeChanger}
                />
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
