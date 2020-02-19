import React from 'react';
import renderer from 'react-test-renderer';
import OffersList from './offers-list';

const mockOffers = [
  {
    id: 1,
    name: `Offer1`,
    picture: `img/apartment-01.jpg`,
    price: 100,
    type: `Private room`,
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 2,
    name: `Offer2`,
    picture: `img/apartment-01.jpg`,
    price: 200,
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 3,
    name: `Offer3`,
    picture: `img/apartment-01.jpg`,
    price: 300,
    type: `Hostel`,
    location: [52.369553943508, 4.85309666406198]
  },
  {
    id: 4,
    name: `Offer4`,
    picture: `img/apartment-01.jpg`,
    price: 400,
    type: `Apartment`,
    location: [52.369553943508, 4.85309666406198]
  },
];

it(`Правильное отображение компонента OffersList`, () => {
  const tree = renderer
    .create(<OffersList
      offers={mockOffers}
      titleClickHandler={()=>{}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
