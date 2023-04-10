import React from "react";
import { Table, Modal } from "antd";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    firstName: "Mike",
    lastName: "Johnson",
    age: 32,
    address: "10 Downing Street",
    salary: "12000",
  },
  {
    key: "2",
    firstName: "Lebron",
    lastName: "Jeyms",
    age: 36,
    address: "13 USA Street",
    salary: "32000",
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

const ManagerP = () => {
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
            <h1>Managers table</h1>
            <Button onClick={showModal} type="primary">
              Add manager <UserAddOutlined />
            </Button>
          </div>
        )}
        dataSource={dataSource}
        columns={columns}
      />
      <Modal
        title="Manager's informations"
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
                  min: 0,
                  max: 99,
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

export default ManagerP;
