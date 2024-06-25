import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RoomDetails = () => {
  const { id } = useParams();
  const [furnitures, setFurnitures] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchWeight, setSearchWeight] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  useEffect(() => {
    fetchFurnitureData(id);
  }, [id]);

  const fetchFurnitureData = async (roomId) => {
    try {
      const response = await fetch(`/api/rooms/${roomId}/furnitures`);
      const data = await response.json();
      setFurnitures(data.furnitures);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching furniture data for room ${roomId}:`, error);
      setLoading(false);
    }
  };

  const filteredFurnituresByWeight = furnitures.filter((furniture) =>
    furniture.weight.toString().includes(searchWeight)
  );

  const filteredFurnituresByPrice = furnitures.filter((furniture) =>
    furniture.price.toString().includes(searchPrice)
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center">
      <h2 className="bg-gray-700 w-3/4">Room Furnitures</h2>
      <input
        type="text"
        placeholder="Search by weight"
        value={searchWeight}
        onChange={(event) => setSearchWeight(event.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 mr-2"
      />
      <input
        type="text"
        placeholder="Search by price"
        value={searchPrice}
        onChange={(event) => setSearchPrice(event.target.value)}
        className="border border-gray-300 rounded px-3 py-2 mb-2 mr-2"
      />
      <ul>
        {filteredFurnituresByWeight
          .filter(
            (furniture) =>
              searchPrice === '' || Number(furniture.price) === Number(searchPrice)
          )
          .map((furniture) => (
            <li key={furniture.id} className="mb-4">
              <p className="text-lg font-medium">{furniture.name}</p>
              <p className="text-gray-700">Weight: {furniture.weight}</p>
              <p className="text-gray-700">Price: ${furniture.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RoomDetails;
