import React from 'react';
import { FURNITURE } from '@/constants/home';
import FurnitureDetail from '@/components/furniture-detail';

const HeroSection = () => {
  return (
    <div className="antiques-hero-section">
      <h1 className="brand">THE ANTIQUE SOCIETY</h1>
      <hr/>
      <h4>Ipsum lorum del sora asti del verde cresti sa.</h4>
      <FurnitureDetail info={FURNITURE} />
    </div>
  );
}

export default HeroSection;