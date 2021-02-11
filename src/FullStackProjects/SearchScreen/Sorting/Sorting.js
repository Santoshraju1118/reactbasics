import { Grid, Paper } from "@material-ui/core";
import React from "react";
import CheckboxProd from "../CheckboxProd";
import "./Sorting.css";

function Sorting() {
  const [sortItems, setSortItems] = React.useState([
    {
      name: "North Indian",
    },
    {
      name: "South Indian",
    },
    {
      name: "Chinese",
    },
    {
      name: "Fast Food",
    },
    {
      name: "Street Food",
    },
  ]);
  const [priceSort, setPriceSort] = React.useState([
    {
      name: "Less than ₹500",
    },
    {
      name: "₹500 to ₹1000",
    },
    {
      name: "₹1000 to ₹1500",
    },
    {
      name: "₹1500 to ₹2000",
    },
    {
      name: "₹2000 & above",
    },
  ]);
  const [sort, setSort] = React.useState([
    {
      name: "Price Low to High",
    },
    {
      name: "Price High to Low",
    },
  ]);
  return (
  <div>
      <div className="sorting" style={{marginLeft: "16px"}}>
        <div style={{ margin: "8px", padding: "8px", textAlign: "left" }}>
          <h3>Filters</h3>
          <h4>Select Location</h4>
          <select
            className="location"
            style={{
              flex: 1,
              borderRadius: "30px",
              padding: "10px",
              border: "2px solid black",
              outline: "none",
            }}
          >
            <option value="0" selected disabled>
              Select
            </option>
            <option value="1">Sarjapur road,Bangluru</option>
            <option value="1">HSR Layout, Bengaluru</option>
            <option value="1">Kormangala, Bengaluru</option>
            <option value="1">Jaynagar, Bengaluru</option>
          </select>
          <h3>Cusine</h3>
          <CheckboxProd categories={sortItems} />
          <h3>Cost For Two</h3>
          <CheckboxProd categories={priceSort} />
          <h3>Sort</h3>
          <CheckboxProd categories={sort} />
        </div>
      </div>

    </div>

  );
}

export default Sorting;
