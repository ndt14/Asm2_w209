// import { useGetProductsQuery, useRemoveProductMutation } from "../api/product";
import { Button, Skeleton, Table, Popconfirm ,Input} from "antd";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGetProductsQuery, useRemoveProductMutation } from "../../api/product";
import { Product } from "../../interface/Product";
import { useState } from "react";

const ProductManagement = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const [searchText, setSearchText] = useState("");
    console.log("data:", data);
    console.log("isLoading:", isLoading);
    console.log("error:", error);
  

    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
    if (isLoading) return <Skeleton />;
    if (error) return <div>Error</div>;
    const dataSource = data?.data?.map(({ _id, name, price, description, brand, image }: Product) => {
        return {
            key: _id,
            name,
            price,
            description,
            brand,
            image
        };
    });
    const filteredData = data?.data?.filter((product: Product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Desc",
            dataIndex: "description",
            key: "description",
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Image",
            dataIndex: "image",
            key: "image",
            render: (image: string) => {
                return <img src={image} alt="Product" style={{ width: 100, height: "auto" }} />;
              },
        },
        {
            title: "Action",
            key: "action",
            render: ({ key: _id }: any) => {
                return (
                    <>
                        <Popconfirm
                            placement="topLeft"
                            title={"Are you delete?"}
                            onConfirm={() => confirm(_id)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button>
                                {isRemoveLoading ? (
                                    <AiOutlineLoading3Quarters className="animate-spin" />
                                ) : (
                                    "Delete"
                                )}
                            </Button>
                        </Popconfirm>
                        <Button type="primary" danger className="ml-2">
                            <Link to={`/admin/${_id}/edit`}>Edit</Link>
                        </Button>
                    </>
                );
            },
        },
    ];
    const confirm = (_id: number| string) => {
        removeProduct(_id);
    };
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl">Quản lý Sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/add">Thêm sản phẩm</Link>
                </Button>
            </div>

            <Input.Search
        placeholder="Tìm kiếm theo tên sản phẩm"
        allowClear
        onSearch={(value) => setSearchText(value)}
        style={{ marginBottom: 16 }}
      />

            <Table dataSource={filteredData} columns={columns} />
        </div>
    );
};

export default ProductManagement;
