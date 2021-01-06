import React from 'react';

const SelectBox = ({title, checkit, selectorName}) => {
    return(
        <select name={title} onChange={(e) => {checkit(e)}}>
            <option value="">Please select</option>
            {selectorName.map((name, no) => <option key = {no} value={name} >{name} </option>)}
        </select>
    )
}

export default SelectBox;