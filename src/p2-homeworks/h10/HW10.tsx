import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Preloader.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC} from "./bll/loadingReducer";

function HW10() {
    const {
        loading
    } = useSelector((state: AppStoreType) => state.loading)

    const dispatch = useDispatch()

    /*const loading = false*/

    const setLoading = () => {
        dispatch(loadingAC())
        setTimeout(() => {
            dispatch(loadingAC())
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            Homework №10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.preloader}>
                       <div className={s.preloader__image_animate}>
                       </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
