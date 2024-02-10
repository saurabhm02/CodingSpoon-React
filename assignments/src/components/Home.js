import React from 'react';
import { Link } from 'react-router-dom';

function Home({ userData }) {
  const userDataExists = Object.values(userData).some(value => value !== '');
  
  return (
    <div className="flex flex-col gap-10 items-center text-white justify-center w-full h-[100vh] bg-gray-900 p-8">
      {userDataExists ? (
        <>
          <h2 className="text-3xl font-bold text-center mb-4">Welcome, {userData.name}</h2>
            <div className="grid grid-cols-2 gap-4 h-2/5 rounded-lg shadow-md shadow-white p-4">
                <p className="text-lg"><span className="font-bold">Age:</span> {userData.age}</p>
                <p className="text-lg"><span className="font-bold">Address:</span> {userData.address}</p>
                <p className="text-lg"><span className="font-bold">Email:</span> {userData.email}</p>
                <p className="text-lg"><span className="font-bold">Country:</span> {userData.country}</p>
                <p className="text-lg"><span className="font-bold">State:</span> {userData.state}</p>
                <p className="text-lg"><span className="font-bold">Zipcode:</span> {userData.zipcode}</p>
            </div>
        </>
      ) : (
        <div className="text-3xl font-bold text-center">
            <h2>Welcome Please fill the form to enter yourself in this website</h2>
            <Link to="/form">
                <div className="inline-flex items-end mt-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold text-lg py-2 px-4 rounded">Fill the Form</button>
                </div>
            </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
