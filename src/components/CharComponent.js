import React from 'react';

const CharComponent = ({chardata}) => {
    return(
        <div className="d-flex flex-column charbox">
            <div style={{position:'relative'}}>
                <img src={chardata.image} alt="charimg" width="100%" className="charimage"/>
                <div style={{position: 'absolute', bottom: '0'}} className="imagebtmtext px-2">
                    <div className="charName">{chardata.name}</div>
                    <div className="subdetails"><span>{`id : ${chardata.id} - created ${new Date().getFullYear() - new Date(chardata.created).getFullYear()} year ago`}</span></div>
                </div>
            </div>
            <ul className="charlist">
                <li className="listline">
                    <div className="headingName">STATUS</div>
                    <div className="listdata">{chardata.status}</div>
                </li>
                <li className="listline">
                    <div className="headingName">SPECIES</div>
                    <div className="listdata">{chardata.species}</div>
                </li>
                <li className="listline">
                    <div className="headingName">GENDER</div>
                    <div className="listdata">{chardata.gender}</div>
                </li>
                <li className="listline">
                    <div className="headingName">LAST LOCATION</div>
                    <div className="listdata">{chardata.location.name}</div>
                </li>
            </ul>
        </div>
    )
}

export default CharComponent;