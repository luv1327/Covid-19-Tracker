import React from 'react'
import '../styles/SymptonsAndPrecautions.css'
// import SymptomsImage from './corona-symptoms-image.jpg'
// import PreventionImage from './corona-prevention.jpg'

function SymptonsAndPrecautions() {
    return (
        <div className='symptoms-and-precautions__container'>
            <div className='symptoms-text'>
                <h2 className='symptoms-heading '>Watch for symptoms</h2>
                <h6>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear <strong>2-14 days after exposure to the virus.</strong> People with these symptoms may have COVID-19:</h6>
            </div>
                <div className='symptoms container'>
                <ul>
                    <li>Fever Or Chills</li>
                    <li>Cough</li>
                    <li>Shortness of breath or difficulty breathing</li>
                    <li>Fatigue</li>
                    <li>Muscle or body aches</li>
                    <li>Headache</li>
                    <li>New loss of taste or smell</li>
                    <li>Sore throat</li>
                    <li>Congestion or runny nose</li>
                    <li>Nausea or vomiting</li>
                    <li>Diarrhea</li>
                </ul>
                <p>This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.</p>
            </div>
        </div>
    )
}

export default SymptonsAndPrecautions
