import React from 'react';
import { FURNITURE } from '@/constants/home';
import TopEvents from '@/components/content/events';
import FurnitureDetail from '@/components/furniture-detail';
import Appreciation from '@/assets/appreciation.jpg';

const Content = () => {
  return (
    <div className="antiques-content">
      <div className="content-section-wrapper">
        <h2 className="content-section-title">ANTIQUE<br/>APPRECIATION<br/>SINCE 1964.</h2>
        <hr/>
        <span className="content-section-description">The Antique Society was founded to study furniture of all periods, places and kinds, to increase knowledge and appreciation of it, and to assist in the preservation of furniture and its records.
        </span>

        <img src={Appreciation} alt='appreciation' />
        <FurnitureDetail info={FURNITURE} />
      </div>

      <div className="content-section-events-wrapper">
        <h5>New events</h5>
        <hr/>
        <TopEvents />
      </div>
    </div>
  );
}

export default Content;