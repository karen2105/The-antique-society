import React from 'react';

const FurnitureDetails = ({info}) => {
  return (
    <div className="furniture-detail-wrapper">
        <span className="furniture-detail year">
          c.{info.year}
          <span className="slash">   /  </span>
        </span>
        <span className="furniture-detail type"> {info.type} by</span>
        <span className="furniture-detail artist"> {info.artist} </span>-
        <span className="furniture-detail country"> {info.country} </span>
        <span className="furniture-detail short_description"> {info.short_description}</span>
    </div>
  );
}

export default FurnitureDetails;