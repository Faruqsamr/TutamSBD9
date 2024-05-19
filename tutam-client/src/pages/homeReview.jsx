import React, { useState, useEffect } from "react";
import { getReview } from "../actions/Review.actions";
import Card from "../components/Card";
import UserNavbar from "../components/UserNavbar";
import { getUserbyId } from "../actions/User.actions";

function HomeReview() {
  const [kost, setKost] = useState([]);
  const [user, setUser] = useState([]);

  const getAllReview = async () => {
    const apiResponse = await getReview();
    if (apiResponse.success) {
      // See the result in the console from the browser
      console.log("Response In homeReview.jsx");
      console.log(apiResponse.data);

      setKost(apiResponse.data);
    } else {
      alert("Failed to fetch Kost");
    }
  };

  useEffect(() => {
    getAllReview();
  }, []);


  return (
    <div>
      <UserNavbar/>
      <div className="bg-gray-800 mx-auto p-10 min-h-screen">
        <div className="card-container grid grid-cols-3 gap-3 flex flex-wrap justify-center">
          {kost.map((kost, index) => (
            <Card
              key={index}
              name={kost.name}
              kamar={"kamar: " + kost.kamar}
              user={kost.username}
              review={kost.review}
              rating={"Rating: " + kost.rating}
              resources={kost.resources}
              id={kost.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeReview;