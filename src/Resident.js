import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resident = ({ residentUrl }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    const fetchResident = async () => {
      try {
        const response = await axios.get(residentUrl);
        setResident(response.data);
      } catch (error) {
        console.error('Error fetching resident:', error);
      }
    };

    fetchResident();
  }, [residentUrl]);

  return (
    <tr>
      {resident && (
        <>
          <td>{resident.name}</td>
          <td>{resident.height}</td>
          <td>{resident.mass}</td>
          <td>{resident.gender}</td>
        </>
      )}
    </tr>
  );
};

export default Resident;
