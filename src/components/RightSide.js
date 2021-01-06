import React from 'react';
import CharsView from './CharsView';
import SelectedFiltersAndSearch from './SelectedFiltersAndSearch';
const RightSide = () => {
    return(
        <>
            <SelectedFiltersAndSearch />
            <CharsView />
        </>
    )
}

export default RightSide;