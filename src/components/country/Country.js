import React, { useContext } from 'react'
import { useParams, useNavigate, Link } from "react-router-dom"
import { CountriesContext } from '../context/countriesContext'
import { ThemeContext } from '../context/themeContext'
import row from '../img/row.png'
import rowdark from '../img/rowdark.png'
import './Country.scss'


export const Country = () => {
   
    //useParams nos lee los parametros de la URL, tiene que ser tal cual se crearon, en este caso es countryName
    const { countryName } = useParams();
    const {countries} = useContext(CountriesContext)
    const {theme} = useContext(ThemeContext)
    const country = countries.find(country => country.name === countryName)
    
    

    const navigate = useNavigate();
    const handleReturn = () =>{
        navigate(-1);
    }
    const {
        flag,
        name,
        population,
        region,
        capital,
        nativeName,
        subregion,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = country;
    return (
        <div className={`${theme}`}>
            <div className='container containercountry'>
            <button
                className={theme === "dark" ? 'darkHeader': 'lightHeader'}
                onClick={ handleReturn }
            >
            <div>
            <img src={theme == 'dark' ? rowdark: row}/> <span>Back</span></div>
            </button>

            
                <div className='box'>

                    <img src={flag} />

                    <div className={`info`}>
                        <h1>{name}</h1>
                        <div className='data'>
                            <div>
                                <p><b>Native Name:</b> {nativeName}</p>
                                <p><b>Population:</b> {population.toLocaleString()}</p>
                                <p><b>Region:</b> {region}</p>
                                <p><b>Sub Region:</b> {subregion}</p>
                                {capital && <p><b>Capital:</b> {capital}</p>}
                            </div>
                            <div>
                                <p><b>Top Level Domain:</b> {topLevelDomain.map(domain=>domain)}</p>
                                {currencies && <p><b>Currencies:</b> {currencies[0].name}</p>}
                                <p><b>Languages:</b> {languages.map(lang => lang.name !== languages[languages.length -1].name ? lang.name + ", " : lang.name)}</p>
                            </div>
                        </div>
                        {borders && 
                        <div className='border'>
                            <p>
                                <b>Border Countries:</b>
                                {borders && borders.map((border)=>
                                <span className={`${theme}Header borders`}>
                                    {countries.map(data => border === data.alpha3Code &&<Link to={`/country/${data.name}`} className={`${theme}Header`} key={name + data.alpha3Code}>{data.name}</Link>)}
                                </span>)}
                            
                            </p>
                        </div>}
                    </div>
                </div>
                </div>
            </div>
        
    )
}
