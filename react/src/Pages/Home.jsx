import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/rooms");
        const data = await response.json();
        setRooms(data.rooms);
      } catch (error) {
        console.error("Failed to load rooms:", error);
      }
      setIsLoading(false);
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-gray-700 w-3/4 h-3/4 flex items-center justify-center rounded-lg shadow-lg">
        {isLoading && <div className="text-white text-center">Loading...</div>}
        {!isLoading && (
          <ul className="text-white text-xl">
            {rooms.map((room) => (
              <li key={room.id} className="mb-4">
                <Link className="underline" to={`/details/${room.id}`}>
                  {room.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Home;
