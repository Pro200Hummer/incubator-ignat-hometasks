import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from "react";
import {ArrType} from "../../HW7";

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: ArrType
    onChangeOption?: (option: string) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    // ключ будет состоять из названия элемента + его индекса в массиве,
    const mappedOptions = options ? options.map((o, i) => (
            <option key={o + "-" + i} value={o}>{o}</option>
        )) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={ onChangeCallback } { ...restProps }>
            { mappedOptions }
        </select>
    );
}

export default SuperSelect;
