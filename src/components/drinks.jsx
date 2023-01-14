import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "meals"), where("type", "==", "drink"));
    onSnapshot(q, (querySnapshot) => {
      setDrinks(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <>
      <div class="flex flex-wrap justify-center space-x-10">
        {drinks.map((drink) => (
          <div
            key={drink.id}
            class="rounded-lg shadow-lg bg-white max-w-xs  mb-10"
          >
            <h1>
              <Link to={`/details/${drink.id}`}>
                <img class="rounded-t-lg" src={drink.data.image} alt="" />
              </Link>
            </h1>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium">
                {drink.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Drinks;
