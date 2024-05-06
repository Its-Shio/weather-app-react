import React, { useState } from "react";

export default function Search() {
  return (
    <div>
      <form>
        <input type="text" id="cityInput" placeholder="Enter a city" />
        <input
          className="submitBtn"
          type="submit"
          value="Search"
          id="btnSubmit"
        />
      </form>
      <button className="currentBtn" id="btnCurrent">
        Current
      </button>
    </div>
  );
}
