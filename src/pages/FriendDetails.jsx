import { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendDetails = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const expectedFriendDetails = data.find((item) => item.id === parseInt(id));
  if (!expectedFriendDetails) {
    return <h3>Loading...</h3>;
  }
  const {
    name,
    bio,
    days_since_contact,
    email,
    goal,
    next_due_date,
    picture,
    status,
    tags,
  } = expectedFriendDetails;
  console.log(expectedFriendDetails);

  return (
    <div className=" bg-red-500 p-10">
      <div className=" w-10/12 mx-auto flex justify-between ">
        <div className="left">
          <div className="shadow bg-white rounded-lg p-4 flex flex-col justify-center items-center space-y-2">
            <img className="rounded-full" src={picture} alt={""} />
            <h1 className="text-[20px] font-semibold">{name}</h1>
            <span
              className={`${status == "overdue" ? "bg-red-500 text-white px-2 py-1 rounded-full font-medium mt-1" : status == "on track" ? "bg-green-500 text-white px-2 py-1 rounded-full font-medium mt-1" : "bg-yellow-500 text-white px-2 py-1 rounded-full font-medium mt-1"}`}
            >
              {status}
            </span>
            <div>
              {tags.map((tag, ind) => (
                <span
                  key={ind}
                  className="px-1 py-1 mx-2 text-[14px]   bg-green-200 rounded-3xl font-medium"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
            <p className="text-gray-600 font-medium">"{bio}"</p>
            <span className="text-gray-600">Preferred:{email}</span>
          </div>

          <div className="btn-container flex flex-col gap-3 my-5">
            <button className="btn  bg-white ">Snooze 2 Weeks</button>
            <button className="btn  bg-white ">Archive</button>
            <button className="btn  bg-white ">Delete</button>
          </div>
        </div>
        <div className="right">
          <div className="flex gap-5">
            <div className="shadow p-6 rounded-lg bg-white text-center">
              <h1 className="text-3xl font-semibold">{days_since_contact}</h1>
              <p>Days Since Contact</p>
            </div>
            <div className="shadow p-6 px-10 rounded-lg bg-white text-center">
              <h1 className="text-3xl font-semibold">{goal}</h1>
              <p>Goal(Days)</p>
            </div>
            <div className="shadow p-6 rounded-lg bg-white text-center">
              <h1 className="text-3xl font-semibold">{next_due_date}</h1>
              <p>Next Due</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
