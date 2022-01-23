import React, { useContext, useState } from 'react'
import { CountryCard } from '../CountryCard/CountryCard'
import { CountriesContext } from '../context/countriesContext'
import { ThemeContext } from '../context/themeContext'
import './CountriesScreen.scss'
import search from '../img/search.png'
import searchdark from '../img/searchdark.png'


export const CountriesScreen = () => {
    const [state, setState] = useState('')
    const [countryFilter, setCountryFilter] = useState([])
    const [regionFilter, setRegionFilter] = useState('')
    const {countries} = useContext(CountriesContext)
    const {theme} = useContext(ThemeContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        let target = e.target.value.toLocaleLowerCase()
        setState(target)
        setCountryFilter(countries.filter( c => c.name.toLocaleLowerCase().includes(state)))
    }

    const handleChange = (e) =>{
        e.preventDefault();
        setRegionFilter(countries.filter( c => c.region.includes(e.target.value)))
    }

    
    document.getElementById('theme').className=theme
    return (
        <>
        
        <div className={`countriesScreen ${theme}`}>
            <div className='container'>
                <div className='search'>
                    <form onChange={handleSubmit}>
                        {theme == "dark" ? <img src={search}/> : <img src={searchdark}/>}
                        <input className={`${theme} ${theme}Header `} type="text" aria-label="input search" placeholder="Search" />
                    </form>
                    <select className={`${theme}Header selector `} onChange={handleChange}>
                        <option value=''>Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="Americas">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
                </div>
                    <div className='countries'>
                    {/* {countries.length <=0 &&<div className={theme == 'dark' ?'loadingdark' : 'loading'}>Loading...</div>} */}
                {state !== '' ? countryFilter.map(c =><CountryCard
                        key={c.name}
                        flag={c.flag}
                        name={c.name}
                        population={parseInt(c.population)}
                        region={c.region}
                        capital={c.capital}
                        
                    />)
                    
                    : regionFilter !== ''  ? regionFilter.map(c =><CountryCard
                        key={c.name}
                        flag={c.flag}
                        name={c.name}
                        population={parseInt(c.population)}
                        region={c.region}
                        capital={c.capital}
                        
                    />) 
                    
                    : countries.map(c =><CountryCard
                        key={c.name}
                        flag={c.flag}
                        name={c.name}
                        population={parseInt(c.population)}
                        region={c.region}
                        capital={c.capital}
                    />)}
                    

                    </div>
                </div>
        </div>
        </>
    )
}
