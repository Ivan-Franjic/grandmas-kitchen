import React, { useState, useEffect } from "react";

const Home = (props) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const requestOptions = {
    method: "GET",
    heders: myHeaders,
  };

  useEffect(() => {}, []);

  return (
    <>
      <table className="table-home" style={{ width: 300 }}>
        <thead>
          <tr>
            <th align="center">Image</th>
          </tr>
        </thead>
        <tbody>
          <td align="center">Image</td>
        </tbody>
      </table>
    </>
  );
};

export default Home;
