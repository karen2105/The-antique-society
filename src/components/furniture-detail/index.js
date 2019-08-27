import React from 'react';

const FurnitureDetails = ({info}) => {
  return (
    <span className="furniture-detail-wrapper">
        <span className="furniture-detail year">{info.year} </span>/
        <span className="furniture-detail type"> {info.type} </span>by
        <span className="furniture-detail artist"> {info.artist} </span>-
        <span className="furniture-detail country"> {info.country} </span>
        <span className="furniture-detail short_description"> {info.short_description}</span>
    </span>
  );
}

export default FurnitureDetails;