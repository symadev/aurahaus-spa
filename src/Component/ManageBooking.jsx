import { useEffect, useState } from 'react';
import axios from 'axios';

const ManageBooking = () => {

    const [manageItems, setManageItems] = useState([]);


//get the data the fetch the both get item
useEffect(() => {
  const fetchData = async () => {
    try {
      const [manageRes, servicesRes] = await Promise.all([
        axios.get('http://localhost:5000/manageItems'),
        axios.get('http://localhost:5000/services'),
      ]);

      // Combine both datasets into one array
      const combined = [...manageRes.data, ...servicesRes.data];
      setManageItems(combined);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  fetchData();
}, []);




    return (
        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr className="text-pink-500">
        
        <th>#</th>
        <th>Logo</th>
        <th>Name</th>
        <th>Balance</th>
        <th>Details</th>
       
      </tr>
    </thead>
  <tbody>
    {/* ||--> this is called the and  */}
  {manageItems.map((item, index) => (
    <tr key={item._id || index}>
      <th>{index + 1}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle h-12 w-12">
            <img src={item.logo || item.image} alt="service" />
          </div>
        </div>
      </td>
      <td>{item.treatment || item.name}</td>
      <td>${item.balance || item.price}</td>
      <td>{item.description}</td>
    </tr>
  ))}
</tbody>

   
  </table>
</div>
    );
};

export default ManageBooking;