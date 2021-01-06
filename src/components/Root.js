import React, { useEffect, useReducer } from 'react';
import {getCharacter} from '../utils/api';
import {query} from '../utils/getQueryObject';
import AlertExample from './Alert';
import App from './App';
import { Context } from './context'; 

function reducer( state , action ) {
  let queryString;
  let obj;
  switch( action.type ){
    case 'init' :
      queryString = action.query.length === 2 ? action.query[1]:null;
      if (queryString) obj  = query(queryString);
      if(Object.prototype.hasOwnProperty.call(obj,'page')) obj.page -= 1; 
      return {...state,payload : action.payload, currentQuery: obj, visibleAlert: false, error:'' };
    case 'update' : 
      queryString = action.query.length === 2 ? action.query[1]:null;
      if (queryString) obj  = query(queryString);
      if(Object.prototype.hasOwnProperty.call(obj,'page')) {
        if(action.isNext) obj.page -= 1 
        else obj.page += 1;
      } 
      return {...state,payload : action.payload, currentQuery: obj};
    case 'dismissError' : 
      return {...state, visibleAlert: false, error:''};  
    case 'showError' :
      return {...state, visibleAlert: true, error: action.error}  
    default:
      return state;  
  }
};
 
function Root () {
  const [state, dispatch] = useReducer( reducer, {} );
  useEffect(() => {
    (async function(){
      const resp = await getCharacter();
      dispatch({type:'init',payload:resp,query:resp.info.next.split('?')});
    })();
  },[]);

  return(
    <div>
      <Context.Provider value={{state,dispatch}} >
        <AlertExample />
        <App />
      </Context.Provider>
    </div>
  )
}

export default Root;