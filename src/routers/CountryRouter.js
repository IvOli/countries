import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CountriesScreen } from '../components/countries/CountriesScreen'
import { Country } from '../components/country/Country'
import { Navbar } from '../components/ui/Navbar'

export const CountryRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<CountriesScreen />} />
                <Route path="country/:countryName" element={<Country />} />
            </Routes>
        </>
    )
}
