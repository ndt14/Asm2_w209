import {
    useGetProductByIdQuery,
    useUpdateProductMutation,
} from "../../api/product";
import { pause } from "../..//utils/pause";
import { Button, Form, Input, Skeleton } from "antd";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
type FieldType = {
    id?: string;
    name?: string;
    price?: string;
    brand?: string;
    image?: string;
    description?: string;
};

const {TextArea} = Input;

const AdminProductEdit = () => {
    const { id } = useParams<{ id: string }>();
    const [updateProduct, { isLoading: isUpdateLoading }] = useUpdateProductMutation();
    const {
        data: productData,
        error,
        isLoading: isGetProductLoading,
    } = useGetProductByIdQuery(id || "");
    const navigate = useNavigate();
    const [form] = Form.useForm();

    useEffect(() => {
        // đồng bộ dữ liệu từ API fill vào form
        form.setFieldsValue({
            id: productData?._id,
            name: productData?.name,
            price: productData?.price,
            brand: productData?.brand,
            image: productData?.image,
            description: productData?.description,
        });
    }, [productData]);
    const onFinish = (values: any) => {
        updateProduct({ ...values, id:id })
            .unwrap()
            .then(async () => {
                console.log("Update success");
                await pause(3000);
                navigate("/admin/products");
            });
    };
    console.log("id", id);
    

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };
    if (isGetProductLoading) return <Skeleton />;
    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Sửa sản phẩm</h2>
            </header>
            <Form
                form={form}
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="Tên sản phẩm"
                    name="name"
                    rules={[
                        { required: true, message: "Vui lòng nhập tên sản phẩm!" },
                        { min: 3, message: "Sản phẩm ít nhất phải 3 ký tự" },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Giá sản phẩm" name="price">
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> label="Thương hiệu" name="brand">
                    <Input />
                </Form.Item>

                <Form.Item 
    label="TextArea"
    name="description">
          <TextArea rows={4} />
        </Form.Item>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isUpdateLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Cập nhật sản phẩm"
                        )}
                    </Button>
                    <Button
                        className="ml-2"
                        type="primary"
                        danger
                        htmlType="submit"
                        onClick={() => navigate("/admin/product")}
                    >
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AdminProductEdit;