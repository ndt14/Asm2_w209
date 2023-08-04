import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../api/product';

type Props = {};

const DetailProduct = (props: Props) => {
  const { idProduct } = useParams<{ idProduct: string }>();
  const { data: productData, isLoading } = useGetProductByIdQuery(idProduct || "");

  if (isLoading) {
    // Optional: You can display a loading indicator while the data is being fetched.
    return <div>Loading...</div>;
  }

  if (!productData) {
    // Xử lý trường hợp không có sản phẩm nào được chọn
    return <div>No product selected.</div>;
  }

  const { name, imgUrl, brand, price, desc } = productData;
console.log(productData);

  return (
    <div className="container">
      <h3>{name}</h3>

      <div className="cart row">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 text-center image-detail">
          <img src={imgUrl} alt="" className="card-img-top" />
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 border-left">
          <div className="row">
            <h2 className="text-danger text-justify my-2">{name}</h2>

            <div className="d-flex align-items-center">
              <span>Thương hiệu: </span>
              <h6 className="card-title"> {brand}</h6>
            </div>
            <div className="price text-danger fs-4">
              <p className="card-text">Giá: {price} $</p>
            </div>
          </div>

          {/* ... Other content */}
          
          {/* Hiển thị mô tả sản phẩm */}
          <div className="additional-info">
            <h4>Description</h4>
            <div className="read-more-content">
              <p className="card-text">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
