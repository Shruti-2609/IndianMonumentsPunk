import './App.css';
import Header from './components/Header';
import CollectionCard from './components/CollectionCard';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';

function App() {
  
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)

  useEffect(() => {
     const getMyNfts= async () => {
       const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xE420e7e21e07744E371946681dF77F0490B45a53&order_direction=asc'
       ) 
       console.log(openseaData.data.assets)
       setPunkListData(openseaData.data.assets)
     }

     return getMyNfts()
  }, [])

  return (
    <div className='app'>
       <Header />
       {punkListData.length > 0 && (
        <>
         <Main punkListData={punkListData} selectedPunk={selectedPunk }/>
         <Punklist 
          punkListData={punkListData} 
          setSelectedPunk ={setSelectedPunk} 
         />
        </>
       )}
       
    </div>
  );
}

export default App;
