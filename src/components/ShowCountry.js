import React from 'react'
import '../styles/ShowCountry.css'
import ShowCountryImage from './showcountry_image.jpg'
// import AllCountries from './AllCountries'
import EarthImage from './earth.jpg'

function ShowCountry({gotCountry,allCountries,isSearched}) {
    function capitalizeFirstLetter() {
        return gotCountry.charAt(0).toUpperCase() + gotCountry.slice(1).toLowerCase();
    }
    const country = allCountries.filter(country =>(capitalizeFirstLetter() === country.Country))
    const oneCountry = country.map(country =>(
        <div className="showcountry__container container">
            <div className="showcountry__row row">
                <div className="showcountry__left col-sm-12 col-md-8 col-lg-8">
                    <img className='showcountry__image' src={ShowCountryImage} alt='world-map'></img>
                </div>
                <div className="showcountry__right col-sm-12 col-md-4 col-lg-4">
                    <div className='showcountry__text'>
                        <p className='showcountry__country__name'><span className='country__bold__text'>{country.Country}</span> </p>
                        <div className='showcountry__total'>
                                <p key='cases' className='showcountry__total__cases'> Total Cases : <span className='country__bold__text'>{country.TotalConfirmed} </span></p>
                                <p key='confirmed' className='showcountry__total__confirmed'> Total Confirmed : <span className='country__bold__text'> {country.TotalConfirmed}</span> </p>
                                <p key='deaths' className='showcountry__total__deaths'>Total Deaths : <span className='country__bold__text'>{country.TotalDeaths}</span></p>
                                <p key='recovered' className='showcountry__total__recovered'>Total Recovered : <span className='country__bold__text'>{country.TotalRecovered}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))
    const notSearched = <div className="not-searched">
        <img  className="earth-image"src={EarthImage} alt='earth'></img>
    </div>
    const searched = isSearched ? oneCountry : notSearched
    return (
        <div>
            {searched}
        </div>
    )
}

export default ShowCountry
