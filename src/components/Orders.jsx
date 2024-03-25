import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/order/getorders');
      setOrders(response.data.orders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  const handleDelete = async (orderId) => {
    try {
      await axios.delete(`http://localhost:8000/api/order/deleteorder/${orderId}`);
      const response = await axios.get('http://localhost:8000/api/order/getorders');
      setOrders(response.data.orders);// Fetch orders again after deletion
    } catch (error) {
      console.error('Error deleting order:', error);
    }
  };

  const totalOrders = orders.length;

  return (
    <Wrapper>
      <center>
        <h2>Orders: {totalOrders}</h2>
        <br /><br /><br />
        <div className='table'>
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Mode</th>
              <th>Email</th>
              <th>Service</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order._id}>
                <td>{order.username}</td>
                <td>{order.payment}</td>
                <td>{order.email}</td>
                <td>{order.package}</td>
                <td>
                  <button className='red' onClick={() => handleDelete(order._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </center>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .red {
    outline: none;
    border: none;
    border-radius: 12px;
    padding: 13px 20px;
    background-color: red;
    color: white;
  }

  table {
    width: 70vw; /* Set table width to 500px */
    overflow-x: auto; /* Allow horizontal scrolling */
    border-collapse: collapse;
  }

  th, td {
    padding: 10px;
    text-align: center;
    border-bottom: 1px solid black;
  }

  th {
    background-color: rgba(98, 84, 243, 2);
    color: white;
    font-size: large;
    letter-spacing: 2px;
  }

  @media screen and (max-width: 500px) {
   .table{
    overflow-x: scroll;
   }
  }
`;

export default Orders;
