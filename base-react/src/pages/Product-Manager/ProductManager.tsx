// import { useGetProductsQuery, useRemoveProductMutation } from "../api/product";
import { Button, Skeleton, Table, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useGetProductsQuery, useRemoveProductMutation } from "../../api/product";

const ProductManagement = () => {
    const { data, error, isLoading } = useGetProductsQuery();
    const [removeProduct, { isLoading: isRemoveLoading }] = useRemoveProductMutation();
    if (isLoading) return <Skeleton />;
    if (error) return <div>Error</div>;
    const dataSource = data?.map(({ id, name, price,desc,brand,imgUrl }: any) => {
        return {
            key: id,
            name,
            price,
desc,
brand,
imgUrl
        };
    });
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
            dataIndex: "desc",
            key: "desc",
        },
        {
            title: "Brand",
            dataIndex: "brand",
            key: "brand",
        },
        {
            title: "Image",
            dataIndex: "imgUrl",
            key: "imgUrl",
            render: (imgUrl: string) => {
                return <img src={imgUrl} alt="Product" style={{ width: 100, height: "auto" }} />;
              },
        },
        {
            title: "Action",
            key: "action",
            render: ({ key: id }: any) => {
                return (
                    <>
                        <Popconfirm
                            placement="topLeft"
                            title={"Are you delete?"}
                            onConfirm={() => confirm(id)}
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
                            <Link to={`/admin/product/${id}/edit`}>Edit</Link>
                        </Button>
                    </>
                );
            },
        },
    ];
    const confirm = (id:any) => {
        removeProduct(id);
    };
    return (
        <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-2xl">Quản lý Sản phẩm</h2>
                <Button type="primary" danger>
                    <Link to="/admin/product/add">Thêm sản phẩm</Link>
                </Button>
            </div>

            <Table dataSource={dataSource} columns={columns} />
        </div>
    );
};

export default ProductManagement;
