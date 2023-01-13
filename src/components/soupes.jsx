import React, { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Soupes = (props) => {
  const [soupes, setSoupes] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "soupes"));
    onSnapshot(q, (querySnapshot) => {
      setSoupes(
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
        {soupes.map((soup) => (
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
                {soup.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Soupes;
