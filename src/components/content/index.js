import React from 'react';
import { FURNITURE } from '@/constants/home';
import TopEvents from '@/components/content/events';
import FurnitureDetail from '@/components/furniture-detail';
import Appreciation from '@/assets/appreciation.jpg';

const Content = () => {
  return (
    <div className="antiques-content">
      <h2>ANTIQUE APPRECIATION SINCE 1964.</h2>
      <hr/>
      The Antique Society was founded to study furniture of all periods, places and kinds, to increase knowledge and appreciation of it, and to assist in the preservation of furniture and its records.

      <img src={Appreciation} alt='appreciation' />
      <FurnitureDetail info={FURNITURE} />

      <h5>New events</h5>
      <hr/>
      <TopEvents />
    </div>
  );
}

export default Content;