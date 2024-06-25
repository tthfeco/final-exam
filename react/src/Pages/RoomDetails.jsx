import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoomDetails(id);
  }, [id]);

  const fetchRoomDetails = async (roomId) => {
    try {
      const response = await fetch(`/api/rooms/${roomId}`);
      const data = await response.json();
      setRoom(data);
      setLoading(false);
    } catch (error) {
      console.error(`Error lodaing room details for id ${roomId}:`, error);
      setLoading(false);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {room ? (
        <>
          <h2>Room Details: {room.name}</h2>
          <p>ID: {room.id}</p>
          <p>Other details: ........</p>
        </>
      ) : (
        <p>No details found for this room.</p>
      )}
    </div>
  );
};

export default RoomDetails;
