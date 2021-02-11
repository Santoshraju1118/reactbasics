import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import SearchProducts from "./SearchProducts/SearchProducts";
import Sorting from "./Sorting/Sorting";
import { Pagination } from '@material-ui/lab';
import './SearchScreen.css';

function SearchScreen() {

  const [products, setProducts] = React.useState([
    {
      id: 1,
      title: "The Big Chill Cakery",
      tag: "Fort",
      address: "Shop 1, Plot D, Samrudhi Complex, Hyderabad",
      cusines: "Bakery",
      cost: 400,
      imageUrl:"https://tobuz-dev-bkt.s3.amazonaws.com/1547809965986FIXED-Bakery-Desserts-1.jpg",
    },
    {
      id: 2,
      title: "The Bake Shop",
      tag: "Fort",
      address: "Shop 1, Plot D, Samrudhi Complex, Hyderabad",
      cusines: "Bakery",
      cost: 400,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    },
    {
      id: 3,
      title: "Hyderabadi Food Court",
      tag: "Fast Food",
      address: "Shop 1, Plot D, Samrudhi Complex, Hyderabad",
      cusines: "Fast Food",
      cost: 400,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
    },
    {
        id: 4,
        title: "Grill Stop",
        tag: "Fort",
        address: "Shop 1, Plot D, Samrudhi Complex, Hyderabad",
        cusines: "Bakery",
        cost: 400,
        imageUrl:"https://tobuz-dev-bkt.s3.amazonaws.com/1547809965986FIXED-Bakery-Desserts-1.jpg",
      },
      {
        id: 5,
        title: "Shah Ghouse",
        tag: "Fort",
        address: "Shop 1, Plot D, Samrudhi Complex, Hyderabad",
        cusines: "Bakery",
        cost: 400,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
      },
      {
        id: 6,
        title: "Paradise",
        tag: "Fort",
        address: "Shop 1, Plot D, Samrudhi Complex, Hyderabad",
        cusines: "Bakery",
        cost: 400,
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg",
      },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(products.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const totalPages = pageNumbers.length;

  return (
    <div>
      <Navbar />
      <div className="Search__title" style={{textAlign: "left", marginLeft: "8px"}}>
        <h1>Breakfast Places in Hyderabad</h1>
      </div>
      <div className="Sort__mobile">
        <h2>Sort / Filter</h2>
      </div>
      <div style={{ display: "flex", flex: "1"}}>
        <div className="Search__container" style={{flex: "0.6"}}>
          <Sorting />
        </div>
        <div className="search__products">
          {currentPosts.map((product) => {
            return (
              <SearchProducts
                key={product.id}
                title={product.title}
                tag={product.tag}
                imageUrl={product.imageUrl}
                cusines={product.cusines}
                cost={product.cost}
                address={product.address}
              />
            );
          })}
            <div className="search__pagination">
                <Pagination count={totalPages} color="secondary" onChange={(event, value) => {setCurrentPage(value)}}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default SearchScreen;
