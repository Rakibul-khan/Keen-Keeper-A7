import React, { use } from "react";
import Friend from "./Friend";

const Friends = ({ fetchPromise }) => {
  const friends = use(fetchPromise);

  return (
    <div>
      <div className="w-10/12 mx-auto">
        <h1 className="font-bold text-4xl my-6">Your Friends</h1>
        <div className="grid grid-cols-4 gap-4">
          {friends.map((friend) => (
            <Friend key={friend.id} friend={friend}></Friend>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
