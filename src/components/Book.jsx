import React from 'react';

function Book({ title, description, characters, imageUrl, onButtonClick }) {
  return (
    <div className="book-card">
      <img src={imageUrl} alt={title} className="book-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Characters:</h3>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button onClick={() => onButtonClick(title, characters)}>Show Book Info</button>
    </div>
  );
}

export default Book;
