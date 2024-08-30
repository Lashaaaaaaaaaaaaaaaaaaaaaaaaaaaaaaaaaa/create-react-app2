import React from 'react';
import '../App.css';
import Book from './Book';

const Book_library = () => {
    const handleBookButtonClick = (title, characters) => {
        console.log('Book Title:', title);
        console.log('Characters:', characters.join(', '));
      };

  return (
    <div className='Book_library'>
        <header className="App-header">
            <h1>Book Library</h1>
        </header>
        <div className='book-list'>
            <Book
            title="Hacksaw Ridge"
            description="Directed By Mel Gibson"
            characters={['Andrew Garfield', 'Teresa Palmer', 'Luke Bracey']}
            imageUrl="https://www.blackfilm.com/read/wp-content/uploads/2016/11/Hacksaw-Ridge-poster-2.jpg"
            onButtonClick={handleBookButtonClick}
            />
            <Book
            title="Fury"
            description="Directed By David Ayer"
            characters={['Brad Pitt', 'Shia LaBeouf', 'Logan Lerman', 'Jon Bernthal']}
            imageUrl="https://1.bp.blogspot.com/-uzRa3MaysHQ/VEcjx8Gpi8I/AAAAAAAAeWg/B_n6dtZM2dM/s1600/FURY%2Bposter.jpg"
            onButtonClick={handleBookButtonClick}
            />
            <Book
            title="Blade Runner 2049"
            description="Directed by Denis Villeneuve"
            characters={['Ryan Gosling', 'Harrison Ford', 'Ana de Armas', 'Jared Leto']}
            imageUrl="https://image.tmdb.org/t/p/original/5EuXvLuNVIVsYDa3d4VrPtnBy5.jpg"
            onButtonClick={handleBookButtonClick}
            />
        </div>
    </div>
  )
}

export default Book_library