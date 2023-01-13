import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Appetizers = (props) => {
  const [appetizers, setAppetizers] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "appetizers"));
    onSnapshot(q, (querySnapshot) => {
      setAppetizers(
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
        {appetizers.map((appetizer) => (
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
                {appetizer.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Appetizers;
