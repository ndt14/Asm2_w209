import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { deleteProduct, fetchProducts } from '../../actions/product';
import { Link } from 'react-router-dom'; 
import { useGetProductsQuery, useRemoveProductMutation } from '../../api/product';

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
  // if (isLoading) return <Skeleton />;
  if (error) return <div>Error</div>;
//   const dataSource = data?.map(({ id, name, price,desc,brand,imgUrl }: any) => {
//       return {
//           key: id,
//           name,
//           price,
// desc,
// brand,
// imgUrl
//       };
//   });

  return (
    <div>
      {/* Full Page Image Header with Vertically Centered Content */}
      <header className="masthead">
        {/* ... Your header content goes here ... */}
      </header>

      <section id="home-section">
        <div className="container">
          <h3 className="text-center title-product-sale">All Products</h3>
          <div className="row">
            {data?.map((item: any) => {
              return (
                <div className="col-3 mb-4" key={item.id}>
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      {/* Sử dụng Link để chuyển hướng đến trang chi tiết sản phẩm */}
                      <Link to={`/product/${item.id}`} className="home-link-product-detail" >
                        <img src={item.imgUrl} alt="" className="card-img-top my-4" />
                        <h5 className="card-title">{item.name}</h5>
                      </Link>
                      <h6 className="card-title">Brand:</h6>
                      <p className="card-text price"> {item.price}$</p>
                      {/* ... Your Buy button and other elements go here ... */}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
