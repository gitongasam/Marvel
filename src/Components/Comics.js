import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "./Card";

export const Comics = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://gateway.marvel.com:443/v1/public/events?limit=5&apikey=b15bb84cc5c814ab8f86a6ae8c08ddaa
          `
        );
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = characters.filter((character) =>
    character.name && character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="header">
        <div className="search-bar">
          <input
            type="search"
            placeholder="Search Here"
            className="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="content">
        {characters.length === 0 ? (
          <p>Loading...</p>
        ) : filteredCharacters.length > 0 ? (
          filteredCharacters.map((character) => (
            <Card key={character.id} data={character} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </>
  );
};
