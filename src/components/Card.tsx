import React from 'react';

type CardProps = {
  title: string;
  description: string;
  bgColor: string;
  image: string;
};

function Card({ title, description, bgColor, image }: CardProps) {
  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} width={200} />
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

export default Card;
