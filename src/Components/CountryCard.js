import React from 'react';
import './CountryCard.css'

function CountryCard(props) {
    const {
        id,
        commonName,
        officialName,
        independent,
        currencies,
        capital,
        subregion,
        languages,
        landlocked,
        area,
        map,
        population,
        carSide,
        timezones,
        continent,
        flag,
        coatOfArms,
        startOfWeek

    } = props
    return (

        <div className='card'>
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
            <div className="currency">
                <div className="title">
                    <h3>Currencies</h3>
                </div>
                <div className="currency-name">
                    {currencies ? Object.entries(currencies).map(a => {
                        for (let i = 0; i < a.length / 2; i++) {
                            return (
                                <div className='currency-name-row' key={a[i]}>
                                    <span className='currency-code'>{a[i]}</span>
                                    <span className='currency-fullname'>{a[i + 1].name}</span>
                                    <span className='currency-symbol'>{a[i + 1].symbol}</span>
                                </div>
                            );
                        }
                    }) : ''}
                </div>
            </div>
            <div className='independent' style={independent ? { background: "var(--green)" } : { background: "var(--red)" }}>
                {independent ? <p>Independent</p> : <p>Not Independent</p>}
            </div>
        </div>
    );
}

export default CountryCard;
