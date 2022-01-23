import { BrowserRouter } from "react-router-dom"
import { CountryRouter } from './routers/CountryRouter'
import { ThemeContext } from "./components/context/themeContext";
import { useEffect, useState } from "react";
import { CountriesContext } from "./components/context/countriesContext";

export const CountriesApp = () => {
    const [theme, setTheme] = useState("light")
    const [countries, setCountries] = useState([])
    const data = async ()=> {
        const response = await fetch(`https://restcountries.com/v2/all`)
        const data = await response.json()
        setCountries(data)
    }
    useEffect(() => {
        
        data()
    }, [])


    return (
        
    <ThemeContext.Provider value={
        {theme, setTheme}
      }>
      <CountriesContext.Provider value={{countries, setCountries}}>
        <BrowserRouter>
            <CountryRouter />
        </BrowserRouter>
        </CountriesContext.Provider>
        </ThemeContext.Provider>
    )
}
