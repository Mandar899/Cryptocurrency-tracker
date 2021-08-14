import React from 'react';

const Coin = ({ coin }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap,
    price_change_percentage_24h,
    total_volume,
  } = coin;
  return (
    <div className='flex justify-center subpixel-antialiased'>
      <div className='flex justify-start items-center h-20 border-b border-gray-500 w-full'>
        <div className='flex items-center pr-6 min-w-300px'>
          <img src={image} alt='crypto' className='h-7 w-7 mr-3' />
          <h1 className='font-inter font-bold w-150px text-white'>{name}</h1>
          <p className='uppercase font-inter font-semibold text-white'>
            {symbol}
          </p>
        </div>
        <div className='flex justify-between w-full items-center'>
          <p className='w-110px  font-inter font-semibold  text-white mr-5'>
            ₹{current_price}
          </p>
          <p className='w-200px font-inter font-semibold  text-white'>
            ₹{total_volume.toLocaleString()}
          </p>
          {price_change_percentage_24h < 0 ? (
            <p className='w-20 text-red-400 font-semibold font-inter'>
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className=' w-20 text-green-400 font-semibold font-inter'>
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className=' w-240px font-bold font-inter  text-white'>
            <span className='text-gray-500'>Mkt Cap: </span>$
            {market_cap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
