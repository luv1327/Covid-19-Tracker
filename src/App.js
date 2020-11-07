import './App.css';
import axios from 'axios'
import {useState,useEffect} from 'react'
// import AllCountries from './components/AllCountries'
import Landing from './components/Landing'
import SymptonsAndPrecautions from './components/SymptonsAndPrecautions'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [allCountries,setAllCountries] = useState([])
  // const [global,setGlobal] = useState({})
  useEffect(()=>{
    async function getAllCountries(){
      const url = 'https://api.covid19api.com/summary'
      const request = await axios.get(url)
      setAllCountries(request.data.Countries)
      // setGlobal(request.data.Global)
    }
    getAllCountries()
  },[])
  return (
    <div className="app__container App">
      <Landing allCountries={allCountries}/>
      {/* <AllCountries allCountries={allCountries}/> */}
      <SymptonsAndPrecautions/>
    </div>
  );
}

export default App;
