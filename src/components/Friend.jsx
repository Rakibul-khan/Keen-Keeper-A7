import React from "react";
import { Link } from "react-router";

const Friend = ({ friend }) => {
  const { name, days_since_contact, picture, tags, status, id } = friend;
  // console.log(friend);
  return (
    <Link
      to={`frienddetails/${id}`}
      className="shadow rounded-xl p-5 space-y-2 flex flex-col justify-center items-center"
    >
      <img className="rounded-full" src={picture} alt={name} />
      <h1 className="font-semibold text-2xl">{name}</h1>
      <p className="text-[#64748B]">{days_since_contact}d ago</p>
      <div>
        {tags.map((tag, ind) => (
          <span
            key={ind}
            className="px-2 py-1 mx-2   bg-green-200 rounded-3xl font-medium"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>
      <button
        className={`${status == "overdue" ? "bg-red-500 text-white px-2 py-1 rounded-full font-medium mt-1" : status == "on track" ? "bg-green-500 text-white px-2 py-1 rounded-full font-medium mt-1" : "bg-yellow-500 text-white px-2 py-1 rounded-full font-medium mt-1"}`}
      >
        {status}
      </button>
    </Link>
  );
};

export default Friend;
