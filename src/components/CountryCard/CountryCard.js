import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CountryCard.scss'
import { ThemeContext } from '../context/themeContext'

export const CountryCard = ({
    flag,
    name,
    population,
    region,
    capital,
}) => {
    const {theme, background} = useContext(ThemeContext)
    
    const styleDark = {
        background: "#2B3844",
        color: "white"
    }
    const styleLight = {
        background: "white",
        color: "#111517"
    }
    return (
        <Link to={`/country/${name}`}>
            <div className={`card`} style={theme == "dark" ? styleDark : styleLight}>
                <img src={flag} />
                <h3>{name}</h3>
                <p><b>Population:</b> {population}</p>
                <p><b>Region:</b> {region}</p>
                <p><b>Capital:</b> {capital}</p>
            </div>
        </Link>
    )
}
