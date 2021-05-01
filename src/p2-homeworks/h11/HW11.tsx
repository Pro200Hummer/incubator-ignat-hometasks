import React, {ChangeEvent, useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {


    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeRange = (e: ChangeEvent<HTMLInputElement>) => {
        const trigger = e.currentTarget.id
        if(trigger === "simple" || trigger === "double-lower"){
            setValue1(+e.currentTarget.value)
        }else if(trigger === "double-higher"){
            setValue2(+e.currentTarget.value)
        }
    }

    return (
        <div>
            <hr/>
            Homework №11
            <div>
                <span>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value={value1}
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    onChangeRange={onChangeRange}
                    value={[value1,value2]}
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
