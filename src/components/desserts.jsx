import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Desserts = (props) => {
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "desserts"));
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
