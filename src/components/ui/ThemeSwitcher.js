import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';
import moon from  '../img/moon.png'
import moondark from  '../img/moondark.png'
export const ThemeSwitcher = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    return (
        <>
        <span onClick={()=>(setTheme(theme == "dark" ? "light" : "dark"))}>
                {theme == "dark" ? <><img src={moon}/> Light</> : <><img src={moondark}/> Dark</>} Mode
        </span>
        </>
    )
}
