import React, { useEffect, useState } from "react";

const ProductComponent = () => {
  const [products, setProducts] = useState([]);
  const [groupedProducts, setGroupedProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(products);
        const grouped =
          data &&
          data?.length > 0 &&
          data?.reduce((acc, product) => {
            acc[product.category] = acc[product.category] || [];
            acc[product.category].push(product);
            return acc;
          }, {});
        setGroupedProducts(grouped);
      });
  }, []);

  return (
    <div>
      <div>
        {Object?.keys(groupedProducts)?.map((category, categroryIndex) => {
          return (
            <div className="category-container" key={categroryIndex}>
              <h4 className="category-name"> {category}</h4>
              <div className="prod-container">
                {groupedProducts[category]?.map((prod, prodIndex) => {
                  return (
                    <div className="prod-card" key={prodIndex}>
                      <div>
                        <img className="prod-image" src={prod?.image} />
                      </div>
                      <div className="prod-details">
                        <div className="prod-title">{prod?.title}</div>
                        <div className="prod-price">{prod?.price} $</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductComponent;
