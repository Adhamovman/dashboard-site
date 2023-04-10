import React from "react";
import { Table, Modal } from "antd";
import { Button, Form, Input } from "antd";
import { useState } from "react";
import { UserAddOutlined } from "@ant-design/icons";

const dataSource = [
  {
    key: "1",
    firstName: " Penn",
    lastName: "Jillette",
  },
  {
    key: "2",
    firstName: "Isabella ",
    lastName: "Catherine",
  },
  {
    key: "3",
    firstName: "Sophia ",
    lastName: "Eleanor",
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
];

const ArchitectP = () => {
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
            <h1>Architects table</h1>
            <Button onClick={showModal} type="primary">
              Add architect <UserAddOutlined />
            </Button>
          </div>
        )}
        dataSource={dataSource}
        columns={columns}
      />
      <Modal
        title="Architect's informations"
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
                message: "Please input your firstname!",
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
                message: "Please input your lastname!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ArchitectP;
