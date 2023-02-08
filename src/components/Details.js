import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GoingBack from './GoingBack';
import { fetchDetails } from '../redux/CryptoDetails';

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { detail, loading, error } = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);

  return (
    <div>
      {loading && <h1 className="fallback">Loading...</h1>}
      {error && <h1 className="fallback">{error}</h1>}
      {detail && (
        <div>
          <GoingBack />
          <div>
            <div key={detail.id}>
              <img src={detail.icon} alt={detail.id} />
              <div>
                <h2>{detail.name}</h2>
              </div>
              <h3>
                <span> Name:</span>
                {' '}
                {detail.name}
              </h3>
              <h3>
                <span> Symbol:</span>
                {' '}
                {detail.symbol}
              </h3>
              <h3>
                <span> Rank:</span>
                {' '}
                {detail.rank}
              </h3>
              <h3>
                <span> Price:</span>
                {' '}
                {detail.price}
                {' '}
                $
              </h3>
              <h3>
                <span> Price in BTC:</span>
                {' '}
                {detail.priceBtc}
              </h3>
              <h3>
                <span>Available Supply:</span>
                {' '}
                {detail.availableSupply}
              </h3>
              <h3>
                <span>Total Supply:</span>
                {' '}
                {detail.totalSupply}
              </h3>
              <h3>
                <span>Price Change in hour:</span>
                {' '}
                {detail.priceChange1h}
              </h3>
              <h3>
                <span>Price Change in day:</span>
                {' '}
                {detail.priceChange1d}
              </h3>
              <h3>
                <span>Price Change in week:</span>
                {' '}
                {detail.priceChange1w}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
