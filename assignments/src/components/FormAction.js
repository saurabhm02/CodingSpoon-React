import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function FormAction({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    address: '',
    email: '',
    country: '',
    state: '',
    zipcode: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        navigate('/');
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center ">
        <div className="container max-w-screen-lg mx-auto">
            <div>
            <div className=" rounded shadow-lg p-4 px-4 bg-gray-400 md:p-8 mb-6 ">
                <div className="grid gap-4 gap-y-2 text-sm  grid-cols-1 lg:grid-cols-3">
                    <div className="text-white text-xl">
                        <p className="font-medium text-2xl">Personal Details</p>
                        <p>Please fill out all the fields.</p>
                    </div>

                    <div className="lg:col-span-2">
                            <form onSubmit={handleSubmit} action="" className=" grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                <div className="md:col-span-5">
                                    <label for="full_name">Full Name</label>
                                    <input 
                                            type="text" 
                                            name="name" 
                                            value={formData.name} 
                                            onChange={handleChange}
                                            placeholder='Enter your Full Name'
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                </div>

                                <div className="md:col-span-5">
                                    <label for="email">Email Address</label>
                                    <input 
                                            type="email" 
                                            name="email" 
                                            value={formData.email} 
                                            onChange={handleChange}
                                            placeholder='Enter your Email Address'
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                </div>

                                <div className="md:col-span-2">
                                    <label for="age">Age: </label>
                                    <input 
                                            type="number" 
                                            name="age" 
                                            value={formData.age} 
                                            onChange={handleChange}
                                            placeholder='Enter your Age'
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                        />
                                </div>

                                <div className="md:col-span-3">
                                    <label for="address">Address / Street</label>
                                    <input 
                                            type="text" 
                                            name="address" 
                                            value={formData.address} 
                                            onChange={handleChange} 
                                            placeholder='Enter your Address'
                                            className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"    
                                        />
                                </div>  

                                <div className="md:col-span-2">
                                    <label for="country">Country / region</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                    <input 
                                        name="country" 
                                        id="country" 
                                        placeholder="Country" 
                                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                                        value={formData.country}
                                        onChange={handleChange} 
                                    />
                                    
                                    </div>
                                </div>

                                <div className="md:col-span-2">
                                    <label for="state">State / province</label>
                                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                                    <input 
                                        name="state" 
                                        id="state" 
                                        placeholder="State" 
                                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent" 
                                        value={formData.state}
                                        onChange={handleChange}
                                    />
                                    </div>
                                </div>

                                <div className="md:col-span-1">
                                    <label for="zipcode">Zipcode</label>
                                    <input 
                                        type="text" 
                                        name="zipcode" 
                                        id="zipcode" 
                                        className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"   
                                        value={formData.zipcode} 
                                        onChange={handleChange}
                                    />
                                </div>
            
                                <div className="md:col-span-5 text-right">
                                    <div className="inline-flex items-end">
                                        <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
                                    </div>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
}

export default FormAction;
