import React from "react";
import Weather from "./Weather";

export default function Search() {
  return (
    <div className="Search">
      <h1>Weather Search Engine</h1>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              autoFocus
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <br />
      <Weather />
    </div>
  );
}
