import { useState } from 'react';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase-utils/firebase.utils';

const AddLocation = () => {
  const [locationName, setLocationName] = useState('');
  const [smallPrice, setSmallPrice] = useState('');
  const [mediumPrice, setMediumPrice] = useState('');
  const [largePrice, setLargePrice] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Add the location to Firestore
    const locationRef = doc(collection(db, 'locations'), locationName);
    await setDoc(locationRef, { name: locationName });
  
    // Add default dataset for the new location
    const defaultData = {
      oj: {
        items: [
          { id: 1, isInStock: false, name: "Small Oj", price: parseFloat(smallPrice), quantity: 0 },
          { id: 2, isInStock: false, name: "Medium Oj", price: parseFloat(mediumPrice), quantity: 0 },
          { id: 3, isInStock: false, name: "Large Oj", price: parseFloat(largePrice), quantity: 0 },
        ],
        title: "Oj",
      },
    };
  
    await setDoc(doc(db, 'Oj', locationRef.id), defaultData);
  
    // Reset the input fields
    setLocationName('');
    setSmallPrice('');
    setMediumPrice('');
    setLargePrice('');
  };
  

  return (
    <div>
      <h1>Add a new location</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={locationName}
          onChange={(e) => setLocationName(e.target.value)}
          placeholder="Location name"
        />
        <input
          type="number"
          step="0.01"
          value={smallPrice}
          onChange={(e) => setSmallPrice(e.target.value)}
          placeholder="Small Oj Price"
        />
        <input
          type="number"
          step="0.01"
          value={mediumPrice}
          onChange={(e) => setMediumPrice(e.target.value)}
          placeholder="Medium Oj Price"
        />
        <input
          type="number"
          step="0.01"
          value={largePrice}
          onChange={(e) => setLargePrice(e.target.value)}
          placeholder="Large Oj Price"
        />
        <button type="submit">Add Location</button>
      </form>
    </div>
  );
};

export default AddLocation;
