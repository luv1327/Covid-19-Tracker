import React,{useState} from 'react'
import ShowCountry from './ShowCountry'
import '../styles/Landing.css'
import bannerImage from './banner_image.jpg'


function Landing({allCountries}) {
    const [searchedCountry,setSearchedCountry] = useState(String)
    const [gotCountry,setGotCountry] = useState(String)
    const [isSearched,setIsSearched] = useState(false)
    const handleChange = (event) =>{
        const country = event.target.value
        setSearchedCountry(country)
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        setGotCountry(searchedCountry)
        setIsSearched(true)
    }
    return (
        <div>
            <div className="landing__container">
                <div className='landing__banner__image__container'>
                    <img className="landing__image" src={bannerImage} alt='bannerImage'></img>
                </div>
                <div className='landing__form__container'>
                    <form onSubmit={handleSubmit} className='landing__form'>
                        <input  className='landing__searchbar hvr-grow' 
                        type="text" name='searchedCountry' 
                        value={searchedCountry}  
                        onChange={handleChange} 
                        placeholder="Search By Country"
                        ></input>
                        <button className='landing__btn hvr-grow'>Search<i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className='landing__showcountry'>
                <ShowCountry allCountries = {allCountries} gotCountry={gotCountry} isSearched={isSearched}/>
            </div>
        </div>
    )
}

export default Landing
