import React from 'react';

const SupervisorCard = ({ title, description, image, location }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <span>{location}</span>
    </div>
  );
};

export default SupervisorCard;
