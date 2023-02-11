import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyCheckDollar, faChartLine, faGlobe, faClock, faCalendarDay, faCalendarWeek,
}
  from '@fortawesome/free-solid-svg-icons';
import { fetchDetails } from '../redux/CryptoDetails';
import GoingBack from './GoingBack';
import './Details.css';

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
            <div className="details-main" key={detail.id}>
              <img src={detail.icon} alt={detail.id} />
              <div className="details-title">
                <h2>{detail.name}</h2>
                <h4>
                  <span> Symbol:</span>
                  {' '}
                  {detail.symbol}
                </h4>
                <h4>
                  <span> Rank:</span>
                  {' '}
                  {detail.rank}
                </h4>
                <h4>
                  <span> Price:</span>
                  {' '}
                  {detail.price}
                  {' '}
                  $
                </h4>
              </div>
            </div>
            <div className="details-metrics">
              <div className="icon-metric">
                <FontAwesomeIcon icon={faMoneyCheckDollar} size="4x" />
                <h3>
                  <span> Price in BTC:</span>
                  {' '}
                  {detail.priceBtc}
                </h3>
              </div>
              <div className="icon-metric">
                <FontAwesomeIcon icon={faChartLine} size="4x" />
                <h3>
                  <span>Available Supply:</span>
                  {' '}
                  {detail.availableSupply}
                </h3>
              </div>
              <div className="icon-metric">
                <FontAwesomeIcon icon={faGlobe} size="4x" />
                <h3>
                  <span>Total Supply:</span>
                  {' '}
                  {detail.totalSupply}
                </h3>
              </div>
              <div className="icon-metric">
                <FontAwesomeIcon icon={faClock} size="4x" />
                <h3>
                  <span>Price Change in hour:</span>
                  {' '}
                  {detail.priceChange1h}
                </h3>
              </div>
              <div className="icon-metric">
                <FontAwesomeIcon icon={faCalendarDay} size="4x" />
                <h3>
                  <span>Price Change in day:</span>
                  {' '}
                  {detail.priceChange1d}
                </h3>
              </div>
              <div className="icon-metric">
                <FontAwesomeIcon icon={faCalendarWeek} size="4x" />
                <h3>
                  <span>Price Change in week:</span>
                  {' '}
                  {detail.priceChange1w}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Details;
