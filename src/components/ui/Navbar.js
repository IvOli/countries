import React, { useContext } from 'react'
import { ThemeContext } from '../context/themeContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import "./Navbar.scss"
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const {theme} = useContext(ThemeContext)
    return (
        <header className={theme+"Header"}>
            <nav>
                <span>
                    <Link to="/" className={theme+"Header"}>Where in the world</Link>
                </span>
                <ThemeSwitcher />
            </nav>
        </header>
    )
}
