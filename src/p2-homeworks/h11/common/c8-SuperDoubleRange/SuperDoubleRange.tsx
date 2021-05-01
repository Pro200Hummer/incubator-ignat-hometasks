import React, {ChangeEvent} from 'react'
import s from './SuperDoubleRRange.module.css'
type SuperDoubleRangePropsType = {
    /*onChangeRange?: (value: [number, number]) => void*/
    onChangeRange?: (e: ChangeEvent<HTMLInputElement>) => void
    value: [number, number]
    /*min?: number
    max?: number*/
    /*step, disable, ...*/
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        debugger
        onChangeRange && onChangeRange(e)
    }

    return (
        <>
            <input
                type="range"
                value={ value[0] }
                /*className={ s.slider }*/
                id="double-lower"
                onChange={ onChangeCallback }
                { ...restProps }
            />
            <input
                type="range"
                value={ value[1] }
                /*className={ s.slider }*/
                id="double-higher"
                onChange={ onChangeCallback }
                { ...restProps }
            />
        </>
    )
}

export default SuperDoubleRange
