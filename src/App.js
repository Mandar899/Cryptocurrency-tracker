import { useEffect, useState } from 'react';
import axios from 'axios';
import Coin from './components/Coin';

const api =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    // e.preventDefault();
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='box-border min-h-screen bg-gray-900 flex flex-col items-center '>
      <div className='mt-16'>
        <div className='mb-16 flex flex-col items-center justify-center'>
          <h1 className='p-1 font-inter font-black text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300   to-red-600'>
            Search a currency
          </h1>
          <form>
            <input
              className='px-3 py-2 font-inter rounded-md focus:outline-none font-semibold bg-gradient-to-r from-blue-500 to-blue-700 text-white placeholder-gray-200'
              type='text'
              placeholder='Search...'
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </div>
    </div>
  );
}

export default App;
