import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHome } from '../redux/CryptoHome';

function Home() {
  const dispatch = useDispatch();
  const { crypto, loading, error } = useSelector((state) => state.crypto);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filter = crypto.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(fetchHome());
  }, [dispatch]);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {crypto && (
        <div>
          <div>
            <input
              type="text"
              placeholder="Search currency..."
              value={search}
              onChange={handleChange}
            />
          </div>
          <div>
            {filter.map((item) => (
              <NavLink to={`/${item.id}`} key={item.id}>
                <label key={item.id} htmlFor={item.id}>
                  <img src={item.icon} alt={item.id} />
                  <div>
                    <h2>{item.rank}</h2>
                    <h2>{item.name}</h2>
                  </div>
                  <h3>
                    <b> Price:</b>
                    {' '}
                    {item.price.toFixed(5)}
                    {' '}
                    $
                  </h3>
                  <button id={item.id} type="button">
                    Details
                  </button>
                </label>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
