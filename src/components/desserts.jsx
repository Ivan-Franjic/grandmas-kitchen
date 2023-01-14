import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Desserts = () => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "meals"), where("type", "==", "dessert"));
    onSnapshot(q, (querySnapshot) => {
      setDesserts(
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
        {desserts.map((dessert) => (
          <div
            key={dessert.id}
            class="rounded-lg shadow-lg bg-white max-w-xs  mb-10"
          >
            <h1>
              <Link to={`/details/${appetizer.id}`}>
                <img class="rounded-t-lg" src={appetizer.data.image} alt="" />
              </Link>
            </h1>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium">
                {dessert.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Desserts;
