import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css'
import CountryCard from './CountryCard';
import Loader from "./Loader";

function Home(props) {

    const { searchWord } = props;

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const apiCall = async () => {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        return res.data;
    }

    useEffect(() => {
        return async () => {
            setIsLoading(true);
            const apiData = await apiCall();
            setIsLoading(false);
            setData(apiData);
        };
    }, []);
    useEffect(() => {
        return () => {
            const filteredData = data.filter(d => d.name.official.toLowerCase().includes(searchWord.toLowerCase()));
            setFilteredData(filteredData)
        };
    }, [searchWord]);


    return (
        <div className='home'>
            {isLoading ? <Loader /> : ''}
            {
                filteredData.map(d =>
                    <CountryCard key={d.name.common}
                        commonName={d.name.common}
                        officialName={d.name.official}
                        independent={d.independent}
                        currencies={d.currencies}
                        capital={d.capital}
                        region={d.region}
                        subregion={d.subregion}
                        languages={d.languages}
                        landlocked={d.landlocked}
                        area={d.area}
                        map={d.maps.googleMaps}
                        population={d.population}
                        carSide={d.car.side}
                        timezones={d.timezones}
                        continent={d.continents}
                        flag={d.flags.svg}
                        coatOfArms={d.coatOfArms.svg}
                        startOfWeek={d.startOfWeek}
                    />
                )
            }
        </div>
    );
}

export default Home;
