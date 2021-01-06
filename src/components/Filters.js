import React, { useState } from 'react';
import FilterBox from './FilterBox'
import { Label } from 'reactstrap';

const Filters = () => {
    const [BoxData] = useState({'Species':['Human','Mytholog','Other Species...'],'Gender':['Male','FeMale'], 'Origin':['Unknown', 'Post-Apocalyptic Earth', 'Nuptia', 'Other Origins...']});
    
    return(
        <div className="box">
            <Label className="title"> Filters </Label>
            {
                Object.keys(BoxData).map((value,index)=> {return <FilterBox key={index} title={value} checkboxName={BoxData[value]} />})

            }
        </div>
    )
}
export default Filters;