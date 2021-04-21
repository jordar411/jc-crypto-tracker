import { useState } from 'react';
import CoinList from '../components/CoinList';
import SearchBar from '../components/SearchBar';
import Layout from '../components/Layout';


export default function Home({ filteredCoins }) {
  
  const [search, setSearch] = useState('');

  const allCoins = filteredCoins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  return (
    
    <><p id="top"></p>
    
    <Layout>
      <div className='coin_app'>
        <SearchBar type='text' placeholder='Search' onChange={handleChange} />
        <CoinList filteredCoins={allCoins} />

        <a href="#top"><div className='back-to-top'>Back to Top</div></a>

      </div>
    </Layout></>

  );
}

export const getServerSideProps = async () => {

  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return {
    props: {
      filteredCoins
    }
  }
}


// Emmanuel Jose logo, Crypto Tracker logo, and favicon. © Emmanuel Jose. All Rights Reserved.