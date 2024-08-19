import React, { useState } from "react";
import { Button, message, Table } from "antd";
import { nanoid } from "nanoid";
import data from "./data";

export const Home = () => {
  const [dataSource, setDataSource] = useState(
    data.map((item) => ({
      key: nanoid(),
      id: item.id,
      name: item.name,
      email: item.email,
    }))
  );
  const deleteItem = (id) => {
    const newDataSource = dataSource.filter((item) => item.id !== id);
    setDataSource(newDataSource);

    message.error("Product removed");
  };
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      render: (data) => {
        return (
          <div className="buttons">
            <Button danger onClick={() => deleteItem(data.id)}>
              Delete
            </Button>
            <Button type="primary">Edit</Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  );
};
