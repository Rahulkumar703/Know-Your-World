import React, { useState } from 'react';
import './CountryCard.css'

function CountryCard(props) {
    const {
        commonName,
        officialName,
        // independent,
        // currencies,
        capital,
        // subregion,
        // languages,
        // landlocked,
        // area,
        // map,
        // population,
        // carSide,
        // timezones,
        // continent,
        flag,
        // coatOfArms,
        // startOfWeek

    } = props;
    const [isExpanded, setIsExpanded] = useState(false)


    const expandCard = (e) => {
        setIsExpanded(true);
    }

    return (

        <div className={isExpanded ? 'card expanded' : 'card'} onClick={expandCard}>
            <div className="flag">
                <img src={flag} alt="flag" />
            </div>
            <div className="country-name">
                <div className="col">
                    <h1 className='common-name'>{commonName}</h1>
                    <h2 className='official-name'>{officialName}</h2>
                </div>
                <div className="col">
                    <h3 className="capital">{capital}</h3>
                </div>
            </div>
        </div>
    );
}

export default CountryCard;
