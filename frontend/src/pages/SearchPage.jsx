import React from "react";
import Header from "../components/Header/Header";
import Search from "../components/search/search";

function SearchPage() {
  return (
    <div>
      <Header />
      <Search />
      <h1 className="text-3xl bg-gray-300 text-orange-400 font-bold p-5 text-center">
        All Packers and Movers
      </h1>
      <p className="my-5  text-center text-xl text-gray-500 font-semibold">
        There are available Packers and Movers Agent. Kindly click on the
        packers and movers to see the details of it.
      </p>
    </div>
  );
}

export default SearchPage;
