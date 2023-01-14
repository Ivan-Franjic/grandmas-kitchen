import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import maindishes from "../main-dishes.jpg";
import appetizers from "../appetizers.jpg";
import soups from "../soups.jpg";
import desserts from "../desserts.jpg";
import drinks from "../drinks.jpg";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Home = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "meals"), where("favourite", "==", true));
    onSnapshot(q, (querySnapshot) => {
      setFavourites(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <>
      <div class="flex justify-center space-x-5 mb-20">
        <a href="/main_dishes" class="avatar">
          <img
            src={maindishes}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Main dishes</h5>
        </a>

        <a href="/appetizers" class="avatar">
          <img
            src={appetizers}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Appetizers</h5>
        </a>

        <a href="/soupes" class="avatar">
          <img
            src={soups}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Soups</h5>
        </a>

        <a href="/desserts" class="avatar">
          <img
            src={desserts}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Desserts</h5>
        </a>

        <a href="/drinks" class="avatar">
          <img
            src={drinks}
            class="rounded-full w-32 mb-4 mx-auto"
            alt="Avatar"
          />
          <h5 class="text-xl font-medium leading-tight mb-2">Drinks</h5>
        </a>
      </div>

      <div class="flex flex-wrap justify-center space-x-10">
        {favourites.map((favourite) => (
          <div
            key={favourite.id}
            class="rounded-lg shadow-lg bg-white max-w-xs  mb-10"
          >
            <h1>
              <Link to={`/details/${favourite.id}`}>
                <img class="rounded-t-lg" src={favourite.data.image} alt="" />
              </Link>
            </h1>
            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium">
                {favourite.data.name}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
