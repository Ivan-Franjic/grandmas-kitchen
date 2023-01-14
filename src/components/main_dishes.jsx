import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Main_dishes = () => {
  const [main_dishes, setMain_dishes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "meals"), where("type", "==", "main dish"));
    onSnapshot(q, (querySnapshot) => {
      setMain_dishes(
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
        {main_dishes.map((main_dish) => (
          <div
            key={main_dish.id}
            class="rounded-lg shadow-lg bg-white max-w-xs  mb-10"
          >
            <h1>
              <Link to={`/details/${main_dish.id}`}>
                <img class="rounded-t-lg" src={main_dish.data.image} alt="" />
              </Link>
            </h1>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium">
                {main_dish.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Main_dishes;
