import React,{ useContext } from 'react';
import { Label } from 'reactstrap';
import { Context } from './context';
import {getCharacter} from '../utils/api';
import {getQueryText} from '../utils/getQueryObject';
import SelectBox from './SelectBox';

const FilterBox = ({title, checkboxName}) => {
    const state = useContext(Context);
    const checkit = async(e) => {
        const isValue = e.target.value;
        const currentQuery = Object.assign({}, state.state.currentQuery);
        if(isValue) currentQuery[title.toLowerCase()] = e.target.value.toLowerCase();
        else  delete currentQuery[title.toLowerCase()]
        const queryText = getQueryText(currentQuery);
        const apiResponse = await getCharacter(queryText);
        if(Object.prototype.hasOwnProperty.call(apiResponse,'error')) {
            console.log(apiResponse.error);
            state.dispatch({type:'showError', error:apiResponse.error});
            // const error = apiResponse.error;
        }else {
            state.dispatch({
                type:'update',
                payload:apiResponse,
                query:apiResponse.info.next !== null ? 
                apiResponse.info.next.split('?')
                :
                apiResponse.info.prev.split('?'),
                isNext:apiResponse.info.next !== null ? true : false,
            });
        }
    }
    return(
        <div className="filter">
        <Label className="title d-block">{title}</Label>
        <SelectBox title={title} selectorName={checkboxName} checkit={(e) => {checkit(e)}} />
        </div>
    )
}
export default FilterBox;