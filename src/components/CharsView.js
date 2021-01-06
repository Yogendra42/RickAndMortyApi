import React, {useContext} from 'react';
import CharComponent from './CharComponent';
import { Context } from './context'; 

const CharsView = () => {
    const state = useContext(Context);
    return( 
        <div className="list">
            {state.state.payload?.results.map((chardata,key)=> {return(
                <React.Fragment key={key}>
                    <CharComponent chardata={chardata}/>
                </React.Fragment >
            )})
            }   
        </div>
        )
}

export default CharsView;