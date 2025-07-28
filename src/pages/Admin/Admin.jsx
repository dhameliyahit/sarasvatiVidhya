import React, { useEffect, useState } from "react";
import {
  Layout,
  Table,
  Button,
  Modal,
  Form,
  Input,
  message,
  Popconfirm,
  Menu,
} from "antd";
import { FaUser, FaWpforms } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

const { Sider, Content } = Layout;


const VITE_API_URL = import.meta.env.VITE_API_URL
import LoadingSpinner from './../../components/LoadingSpinner';

const AdminPanel = () => {
  const [loading, setLoading] = useState(false);
  const [selectedKey, setSelectedKey] = useState("admission");
  const [admissions, setAdmissions] = useState([]);
  const [registers, setRegisters] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [form] = Form.useForm();

  // Fetch Admission Data
  const fetchAdmissions = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${VITE_API_URL}/api/admission`);
      setAdmissions(res.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
      toast.error("Error fetching admission data");
      setLoading(false)
    }
  };

  // Fetch Register Data
  const fetchRegisters = async () => {
    try {
      setLoading(true)
      const res = await axios.get(`${VITE_API_URL}/api/register`);
      setRegisters(res.data);
      setLoading(false)
    } catch (error) {
      console.error(error);
      toast.error("Error fetching registered users");
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchAdmissions();
    fetchRegisters();
  }, []);

  // Edit Handler
  const handleEdit = (item) => {
    setEditingItem(item);
    form.setFieldsValue(item);
    setIsModalOpen(true);
  };

  // Update Handler
  const handleUpdate = async () => {
    try {
      const updatedValues = form.getFieldValue();
      const id = editingItem._id;

      if (selectedKey === "admission") {
        setLoading(true)
        await axios.put(`${VITE_API_URL}/api/admission/${id}`, {
          comment: updatedValues.comment,
        });
        toast.success("Admission updated");
        fetchAdmissions();
        setLoading(false)
      } else {
        setLoading(true)
        await axios.put(`${VITE_API_URL}/api/register/${id}`, updatedValues);
        toast.success("Register updated");
        fetchRegisters();
        setLoading(false)
      }

      setIsModalOpen(false);
    } catch (err) {
      toast.error("Update failed");
      setLoading(false)
    }
  };

  // Delete Handler
  const handleDelete = async (id) => {
    try {
      if (selectedKey === "admission") {
        setLoading(true)
        await axios.delete(`${VITE_API_URL}/api/admission/${id}`);
        fetchAdmissions();
        setLoading(false)
        toast.success("Admission deleted");
      } else {
        setLoading(true)
        await axios.delete(`${VITE_API_URL}/api/register/${id}`);
        fetchRegisters();
        toast.success("Register deleted");
        setLoading(false)
      }
    } catch (error) {
      toast.error("Delete failed");
      setLoading(false)
    }
  };

  // Table Columns
  const getColumns = () => {
    const commonActions = (_, record) => (
      <div className="flex flex-col sm:flex-row gap-2">
        <Button onClick={() => handleEdit(record)} type="link">Edit</Button>
        <Popconfirm
          title="Are you sure you want to delete?"
          onConfirm={() => handleDelete(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" danger>Delete</Button>
        </Popconfirm>
      </div>
    );

    const createdAtCol = {
      title: "Timing",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => {
        const date = new Date(text);
        return isNaN(date.getTime()) ? "Invalid date" : date.toLocaleString();
      }

    };

    return selectedKey === "admission"
      ? [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Email", dataIndex: "email", key: "email" },
        { title: "Phone", dataIndex: "phone", key: "phone" },
        { title: "Standard", dataIndex: "standard", key: "standard" },
        { title: "Message", dataIndex: "message", key: "message" },
        { title: "Comment", dataIndex: "comment", key: "comment" },
        createdAtCol,
        { title: "Action", render: commonActions },
      ]
      : [
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Mobile", dataIndex: "mobile", key: "mobile" },
        { title: "Student Name", dataIndex: "studentName", key: "studentName" },
        { title: "Parent Name", dataIndex: "parentName", key: "parentName" },
        { title: "Comment", dataIndex: "comment", key: "comment" },
        createdAtCol,
        { title: "Action", render: commonActions },
      ];
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <Layout className="h-screen">
        {/* Sidebar */}
        <Sider theme="dark" width={220}>
          <div className="text-white text-center py-4 text-xl font-bold">
            Admin Panel
          </div>
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKey]}
            onClick={({ key }) => setSelectedKey(key)}
            items={[
              { key: "admission", icon: <FaWpforms />, label: "Admission Inquiry" },
              { key: "register", icon: <FaUser />, label: "Registered Users" },
            ]}
          />
        </Sider>

        {/* Main Content */}
        <Layout>
          <Content className="p-4 sm:p-6 bg-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl font-semibold">
                {selectedKey === "admission" ? "Admission Inquiries" : "Registered Users"}
              </h2>
              <Button onClick={() => {
                selectedKey === "admission" ? fetchAdmissions() : fetchRegisters();
              }}>
                Refresh
              </Button>
            </div>

            <div className="bg-white p-4 rounded shadow overflow-auto">
              <Table
                columns={getColumns()}
                dataSource={selectedKey === "admission" ? admissions : registers}
                rowKey="_id"
                pagination={{ pageSize: 5 }}
                scroll={{ x: true }}
              />
            </div>
          </Content>
        </Layout>

        {/* Edit Modal */}
        <Modal
          title={`Edit ${selectedKey === "admission" ? "Admission" : "Register"}`}
          open={isModalOpen}
          onCancel={() => setIsModalOpen(false)}
          onOk={handleUpdate}
          okText="Update"
        >
          <Form form={form} layout="vertical">
            {selectedKey === "admission" ? (
              <>
                <Form.Item name="name" label="Name">
                  <Input disabled />
                </Form.Item>
                <Form.Item name="email" label="Email">
                  <Input disabled />
                </Form.Item>
                <Form.Item name="phone" label="Phone">
                  <Input disabled />
                </Form.Item>
                <Form.Item name="comment" label="Comment">
                  <Input.TextArea rows={3} />
                </Form.Item>
              </>
            ) : (
              <>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                  <Input disabled />
                </Form.Item>
                <Form.Item name="mobile" label="Mobile" rules={[{ required: true }]}>
                  <Input disabled />
                </Form.Item>
                <Form.Item name="studentName" label="Student Name" rules={[{ required: true }]}>
                  <Input disabled />
                </Form.Item>
                <Form.Item name="parentName" label="Parent Name" rules={[{ required: true }]}>
                  <Input disabled />
                </Form.Item>
                <Form.Item name="comment" label="Comment">
                  <Input.TextArea rows={3} />
                </Form.Item>
              </>
            )}
          </Form>
        </Modal>
      </Layout>
    </>
  );
};

export default AdminPanel;
