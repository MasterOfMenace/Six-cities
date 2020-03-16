import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {sortOffers} from '../../utils';

const withSort = (Component) => {
  const WithSort = (props) => {
    const {offers, sortType} = props;
    const sortedOffers = sortOffers(offers, sortType);
    return <Component {...props} offers={sortedOffers} />;
  };

  WithSort.propTypes = {
    offers: PropTypes.array.isRequired,
    sortType: PropTypes.string.isRequired
  };

  const mapStateToProps = (state) => ({
    sortType: state.currentSortType
  });

  return connect(mapStateToProps, null)(WithSort);
};

export default withSort;