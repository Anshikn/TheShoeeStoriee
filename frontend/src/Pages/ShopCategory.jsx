import React, { useEffect, useState, useMemo } from "react";
import "./CSS/ShopCategory.css";
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";

const ShopCategory = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc'); // Default sorting order
  const [selectedSize, setSelectedSize] = useState('All'); // Default filter
  const sizes = ['All', 'Small', 'Medium', 'Large']; // Example sizes

  // Fetch products from the server
  const fetchInfo = () => {
    fetch('http://localhost:4000/allproducts')
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        setSortedProducts(data); // Initialize sorted products
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Function to sort products by price
  const sortProducts = (order) => {
    const sorted = [...allProducts].sort((a, b) => {
      if (order === 'asc') {
        return a.new_price - b.new_price;
      } else {
        return b.new_price - a.new_price;
      }
    });
    setSortedProducts(sorted);
  };

  // Function to filter products by size
  const filterProductsBySize = (size) => {
    if (size === 'All') {
      setSortedProducts(allProducts);
    } else {
      const filtered = allProducts.filter(product => product.size === size);
      setSortedProducts(filtered);
    }
  };

  // Handler for sort order change
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);
    sortProducts(order);
  };

  // Handler for size filter change
  const handleSizeChange = (e) => {
    const size = e.target.value;
    setSelectedSize(size);
    filterProductsBySize(size);
  };

  const productReq = useMemo(() => {
    let products = [...allProducts];

    if (props.category) {
      products = products.filter(item => item.category === props.category);

    }
    if (props.brand) {
      products = products.filter(item => item.brand === props.brand);

    }
    return products;

  }, [allProducts, props.category, props.brand]);

  return (
    <div className="shopcategory">
      <img src={props.banner} className="shopcategory-banner" alt="" />
      <div className="shopcategory-filters">
        <div className="shopcategory-sort">
          Sort by
          <select value={sortOrder} onChange={handleSortChange}>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
          <img src={dropdown_icon} alt="" />
        </div>
        <div className="shopcategory-filter">
          Filter by Size
          <select value={selectedSize} onChange={handleSizeChange}>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {productReq.map((item, i) => (
          <Item
            id={item.id}
            key={i}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))
        }
      </div>


      <div className="shopcategory-loadmore">
        <Link to='/' style={{ textDecoration: 'none' }}>Explore More</Link>
      </div>
    </div>
  );
};

export default ShopCategory;
