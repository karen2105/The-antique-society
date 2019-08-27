import React from 'react';
import { FURNITURE } from '@/constants/home';
import FurnitureDetail from '@/components/furniture-detail';

const HeroSection = () => {
  return (
    <div className="antiques-hero-section">
      <div className="antiques-hero-content-wrapper">
        <h1 className="name-brand"><span className="small-copy">The</span> <br/>ANTIQUE SOCIETY</h1>
        <div className="hero-text-wrapper d-none d-md-block">
          <hr/>
          <h4 className="small-copy">Ipsum lorum del sora asti del verde cresti sa.</h4>
        </div>
        <FurnitureDetail info={FURNITURE} />
      </div>
    </div>
  );
}

export default HeroSection;