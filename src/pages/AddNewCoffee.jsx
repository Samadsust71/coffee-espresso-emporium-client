import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Swal from "sweetalert2";

const AddNewCoffee = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


 const handleSubmit = (e)=>{
   e.preventDefault()
   const form = e.target;
   const name = form.name.value;
   const chef = form.chef.value;
   const supplier = form.supplier.value;
   const taste = form.taste.value;
   const category = form.category.value;
   const details = form.details.value;
   const photo = form.photo.value;
   const newCoffee = {name, chef, supplier, taste, category , details, photo}
  

  //  send coffee data to server 
  fetch('https://coffee-espresso-server-pi.vercel.app/coffees',{
    method: "POST",
    headers:{
      "content-type":"application/json"
    },
    body:JSON.stringify(newCoffee)
  })
  .then(res=>res.json())
  .then(data=>{
    if (data.insertedId) {
      Swal.fire({
        title: 'Success!',
        text: 'Coffee added successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      })
    }
    form.reset()
  })

 }

  return (
    <div className="min-h-screen bg-add-coffee bg-cover bg-no-repeat bg-center flex  flex-col items-center justify-center px-4 pt-12 pb-28">
         {/* Back Link */}
         <Link to="/" className="flex items-center text-[#374151] hover:text-[#331A15] mb-6  font-semibold">
          <IoArrowBack className="mr-2" />
          Back to Home
        </Link>

      <div className="bg-[#F4F3F0] rounded-lg p-8 max-w-2xl w-full">
       
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center text-[#374151] mb-4">Add New Coffee</h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in the details below to add a new coffee to the collection. Fields marked with * are required.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Chef */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Chef *</label>
              <input
                type="text"
                name="chef"
                placeholder="Enter chef's name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Supplier & Taste */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Supplier *</label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter supplier name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Taste *</label>
              <input
                type="text"
                name="taste"
                placeholder="Describe the taste"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Category & Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category *</label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Details *</label>
              <input
                type="text"
                name="details"
                placeholder="Add details about the coffee"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Photo *</label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="py-1 rounded-md btn-block border-2 border-[#331A15] bg-[#D2B48C] hover:bg-[#D2B48C] text-[#331A15] transition-all">
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNewCoffee;
