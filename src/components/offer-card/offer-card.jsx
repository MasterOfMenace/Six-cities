import React from 'react';
import PropTypes from 'prop-types';
import history from '../../history';
import {OfferRenderType} from '../../const.js';
import {formatRating} from '../../utils.js';

const OfferCard = (props) => {
  const {
    offer,
    onMouseOver,
    onMouseLeave,
    titleClickHandler,
    onFavoriteButtonClick,
    type,
    isAuth
  } = props;
  const isMain = type === OfferRenderType.MAIN;

  return (
    <article className={`${isMain ? `cities__place-card` : `near-places__card`} place-card`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}>
      {offer.isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ``
      }
      <div className={`${isMain ? `cities__image-wrapper` : `near-places__image-wrapper`} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button  ${offer.isFavorite ? `place-card__bookmark-button--active` : ``} button`}
            type="button"
            onClick={isAuth ? () => {
              onFavoriteButtonClick(offer.id, offer.isFavorite);
            } : () => history.push(`/login`)}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${formatRating(offer.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#" onClick={() => titleClickHandler(offer.id)}
          >{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  type: PropTypes.oneOf([OfferRenderType.MAIN, OfferRenderType.NEIGHBORHOOD]).isRequired,
  titleClickHandler: PropTypes.func.isRequired,
  onFavoriteButtonClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  offer: PropTypes.object,
  isAuth: PropTypes.bool,
};

export default OfferCard;
