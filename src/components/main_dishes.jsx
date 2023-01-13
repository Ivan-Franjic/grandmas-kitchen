import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Main_dishes = (props) => {
  const [main_dishes, setMain_dishes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "main_dishes"));
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
