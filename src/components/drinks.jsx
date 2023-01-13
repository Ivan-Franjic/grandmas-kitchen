import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Drinks = (props) => {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "drinks"));
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
          <div class="rounded-lg shadow-lg bg-white max-w-xs  mb-10">
            <a href="#!">
              <img
                class="rounded-t-lg"
                src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
                alt=""
              />
            </a>
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
