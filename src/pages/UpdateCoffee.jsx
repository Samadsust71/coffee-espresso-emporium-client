import React, { useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds a smooth scroll effect
    });
  }, [])
  const loadedCoffee = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    //  send updated coffee data to server
    fetch(`https://coffee-espresso-server-pi.vercel.app/coffee/${loadedCoffee._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset()
        }
      });
  };

  return (
    <div className="min-h-screen bg-add-coffee bg-cover bg-no-repeat bg-center flex  flex-col items-center justify-center px-4 pt-12 pb-28">
      {/* Back Link */}
      <Link
        to="/"
        className="flex items-center text-[#374151] hover:text-[#331A15] mb-6  font-semibold"
      >
        <IoArrowBack className="mr-2" />
        Back to Home
      </Link>

      <div className="bg-[#F4F3F0] rounded-lg p-8 max-w-2xl w-full">
        {/* Form Header */}
        <h2 className="text-2xl font-bold text-center text-[#374151] mb-4">
          Update Existing Coffee Details
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Fill in the details below to update coffee to the collection.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Chef */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input input-bordered w-full"
                defaultValue={loadedCoffee?.name}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Chef
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter chef's name"
                className="input input-bordered w-full"
                defaultValue={loadedCoffee?.chef}
              />
            </div>
          </div>

          {/* Supplier & Taste */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter supplier name"
                className="input input-bordered w-full"
                defaultValue={loadedCoffee?.supplier}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Taste
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Describe the taste"
                className="input input-bordered w-full"
                defaultValue={loadedCoffee?.taste}
              />
            </div>
          </div>

          {/* Category & Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input input-bordered w-full"
                defaultValue={loadedCoffee?.category}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Details
              </label>
              <input
                type="text"
                name="details"
                placeholder="Add details about the coffee"
                className="input input-bordered w-full"
                defaultValue={loadedCoffee?.details}
              />
            </div>
          </div>

          {/* Photo */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered w-full"
              defaultValue={loadedCoffee?.photo}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="py-1 rounded-md btn-block border-2 border-[#331A15] bg-[#D2B48C] hover:bg-[#D2B48C] text-[#331A15] transition-all"
          >
            Update Coffee Details
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
