import { Link } from 'react-router-dom'; 
import { useGetProductsQuery } from '../../api/product';

const Home = () => {
  const { data, error, isLoading } = useGetProductsQuery();
  // if (isLoading) return <Skeleton />;
  if (error) return <div>Error</div>;


  return (
    <div>
      {/* Full Page Image Header with Vertically Centered Content */}
      <header className="masthead">
        {/* ... Your header content goes here ... */}
      </header>

      <section id="home-section">
        <div className="container">
          <h3 className=" mt-5 mb-5 text-center title-product-sale">All Products</h3>
          <div className="row">
            {data?.data?.map((item: any) => {
              return (
                <div className="col-3 mb-4" key={item._id}>
                  <div className="card" style={{ width: '18rem' }}>
                    <div className="card-body">
                      {/* Sử dụng Link để chuyển hướng đến trang chi tiết sản phẩm */}
                      <Link to={`/products/${item._id}`} className="home-link-product-detail" >
                        <img src={item.image} alt="" style={{ height: '15rem' }} className="card-img-top my-4" />
                        <h5 className="card-title">{item.name}</h5>
                      </Link>
                      <h6 className="card-title">Brand:{item.brand}</h6>
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
