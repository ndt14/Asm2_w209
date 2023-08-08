import { useAddProductMutation } from "../../api/product";
import { Button,  Form, Input,Upload } from "antd";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {  UploadOutlined } from '@ant-design/icons';
type FieldType = {
    name?: string;
    price?: string;
    brand?: string;
    image?: string;
    description?: string;
};
const {TextArea} = Input;
const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };
const AdminProductAdd = () => {
    const [addProduct, { isLoading }] = useAddProductMutation();
    const navigate = useNavigate();
    const onFinish = (values: any) => {
        addProduct(values)
            .unwrap()
            .then(() => {
                navigate("/admin/products");
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    // const onImageUpload = (info:any) => {
    //     if (info.file.status === 'done') {
    //       // The backend should return the image URL after the upload is complete.
    //       // Assuming the URL is returned in the response as 'imageUrl'
    //       const imageUrl = info.file.response.imageUrl;
    //       form.setFieldsValue({ image: imageUrl });
    //     }
    //   };

    return (
        <>
            <header className="mb-4">
                <h2 className="font-bold text-2xl">Thêm sản phẩm</h2>
            </header>
            <Form
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

                <Form.Item<FieldType>
                 label="Giá sản phẩm" 
                 name="price"
                 rules={[
                    { required: true, message: "Vui lòng nhập giá sản phẩm!" },
                   
                ]}
                 >
                    
                    <Input />
                </Form.Item>

                <Form.Item<FieldType> 
                label="Thương hiệu" 
                name="brand"
                rules={[
                    { required: true, message: "Vui lòng nhập thương hiệu!" },
                   
                ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        extra=""
      >
        <Upload
          name="image" // This should match the backend's field name for file upload
          action="/api/upload" // Replace this with your backend API endpoint for file upload
          listType="picture"
        
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

    <Form.Item 
    label="TextArea"
    name="description">
          <TextArea rows={4} />
        </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" danger htmlType="submit">
                        {isLoading ? (
                            <AiOutlineLoading3Quarters className="animate-spin" />
                        ) : (
                            "Thêm sản phẩm"
                        )}
                    </Button>
                    <Button
                        className="ml-2"
                        type="primary"
                        danger
                        htmlType="submit"
                        onClick={() => navigate("/admin/products")}
                    >
                        Quay lại
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default AdminProductAdd;