import React from "react";
import { Table, Modal } from "antd";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { UserAddOutlined} from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    firstName: "John",
    lastName: "Caulfield",
    age: 20,
    address: "New York",
    salary: "600",
  },
  {
    key: "2",
    firstName: "William",
    lastName: "Holden",
    age: 25,
    address: "United Kingdom",
    salary: "800",
  },
  {
    key: "3",
    firstName: "Keanu",
    lastName: "Reeves",
    age: 27,
    address: "United State",
    salary: "1000",
  },
];

const columns = [
  {
    title: "Firstname",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Lastname",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
  },
];

const LaborerP = () =>{
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Table
        title={() => (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Laborers table</h1>
            <Button onClick={showModal} type="primary">
              Add laborer <UserAddOutlined />
            </Button>
          </div>
        )}
        dataSource={dataSource}
        columns={columns}
      />
      <Modal
        title="Laborer's informations"
        style={{ top: 20 }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          name="basic"
          labelCol={{
            span: 24,
          }}
          wrapperCol={{
            span: 24,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Firstname"
            name="firstname"
            rules={[
              {
                required: true,
                message: "Please input firstname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Lastname"
            name="lastname"
            rules={[
              {
                required: true,
                message: "Please input lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Address"
            name="address"
            rules={[
              {
                required: true,
                message: "Please input adress!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Form.Item
              label="Age"
              name="age"
              rules={[
                {
                  type: "number",
                  required: true,
                  message: "Please input age!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Salary"
              name="salary"
              rules={[
                {
                  required: true,
                  message: "Please input salary!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default LaborerP;
