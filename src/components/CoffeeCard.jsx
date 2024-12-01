import React from "react";
import { FaPen, FaTrash, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee,setCoffees,coffees }) => {
  const { _id, photo, name, chef, taste } = coffee || {};
  const navigate = useNavigate()
  const handleDelete = (id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-espresso-server-pi.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
             const remaining = coffees.filter(coffee => coffee._id !== id)
             setCoffees(remaining)
            }
          });
      }
    });
  };

  return (
    <div className="card bg-[#F5F4F1] py-8 px-8 lg:px-16 md:flex-row justify-between">
      {/* Image Section */}
      <div>
        <img
          src={photo} // Replace with actual image URL
          alt="Coffee Cup"
          className="w-full  md:h-32 object-cover mb-4"
        />
      </div>
      {/* Content Section */}
      <div className="flex flex-col items-center gap-2 mt-4">
        <h2 className="font-bold">Name: {name}</h2>
        <p>Chef: {chef}</p>
        <p>Taste: {taste}</p>
      </div>
      {/* Action Buttons */}
      <div className="flex md:flex-col items-center justify-center md:items-start md:justify-start flex-row gap-2 mt-4 ">
        <button
        onClick={()=>navigate(`viewcoffee/${_id}`)}
        className="btn bg-[#D2B48C] btn-xs text-gray-100">
          <FaEye />
        </button>
        <button 
        onClick={()=>navigate(`updatecoffee/${_id}`)}
        className="btn bg-[#3C393B] btn-xs text-gray-100">
          <FaPen />
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#EA4744] btn-xs text-gray-100"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
