// src/components/AdminDashboard/ContactMessagesPage.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const ContactMessagesPage = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/admin/messages", {
        withCredentials: true,
      });
      setMessages(res.data);
    } catch (err) {
      console.error("Error fetching messages", err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="space-y-6 text-right">
      <h2 className="text-2xl font-bold text-gray-800">رسائل التواصل</h2>
      <table className="w-full text-sm bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="p-3">الاسم</th>
            <th className="p-3">البريد</th>
            <th className="p-3">الموضوع</th>
            <th className="p-3">الرسالة</th>
            <th className="p-3">التاريخ</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((msg) => (
            <tr key={msg._id} className="border-b text-right">
              <td className="p-3">{msg.name}</td>
              <td className="p-3">{msg.email}</td>
              <td className="p-3">{msg.subject}</td>
              <td className="p-3">{msg.message}</td>
              <td className="p-3">{new Date(msg.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactMessagesPage;