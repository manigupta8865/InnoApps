import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
const Search = () => {
  return (
     <section> 
    <div className="Search-Button-Container">
      <div className="Search-Button-Input">
        <input placeholder="Search"></input>
        <i class="fa fa-search" aria-hidden="true"></i>
        <hr />
      </div>
      <hr/>
    </div>
    
    </section>
  );
};
export default Search;
