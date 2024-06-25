import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RoomsListScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    try {
      const response = await fetch('/api/rooms');
      const data = await response.json();
      setRooms(data);
      setLoading(false);
    } catch (error) {
      console.error('Error lodaing rooms:', error);
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Rooms List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {rooms.map(room => (
            <li key={room.id}>
              <Link to={`/details/${room.id}`}>{room.name}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RoomsListScreen;
