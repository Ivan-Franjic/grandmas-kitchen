import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, query, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Details = () => {
  const { dishId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(() => {
    const q = query(doc(db, "meals", dishId));
    onSnapshot(q, (querySnapshot) => {
      setDetails(querySnapshot.data());
    });
  }, []);
  return (
    <>
      <div class="flex mb-4 ">
        <div class="w-1/4 min-h-screen mr-11 border-r-2">
          <h5 class="font-bold mb-5">INGREDIENTS</h5>
          <p class="w-11/12 break-words">{details.ingredients}</p>
        </div>
        <div class="flex flex-col w-3/4">
          <div class="flex border-b-2 mb-10">
            <img class="w-60 max-h-40 mr-11" src={details.image} alt="" />
            <div>
              <h5 class="font-bold">{details.name}</h5>
              <p class="max-w-lg break-words">{details.description}</p>
            </div>
          </div>
          <div>
            <h5 class="font-bold">HOW TO MAKE</h5>
            <p class="max-w-screen-2xl break-words">{details.recipe}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
