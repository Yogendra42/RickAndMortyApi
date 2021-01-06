import React, { useContext } from 'react';
import { Alert } from 'reactstrap';
import { Context } from './context';

const AlertExample = () => { 
    const state = useContext(Context);  
    console.log(state.state);
    const onDismiss = () => state.dispatch({type:'dismissError', error:''});
    return (
        <Alert className="custom-alert-danger" isOpen={state.state.visibleAlert} toggle={onDismiss}>
        {state.state.error}
        </Alert>
    );
}

export default AlertExample;