import { useEffect, useState } from 'react';
import axios from 'axios';

const ManageBooking = () => {

    const [manageItems, setManageItems] = useState([]);
//get the data
  useEffect(() => {
    axios.get('http://localhost:5000/manageItems') // Adjust if using deployed server
      .then(res => setManageItems(res.data))
      .catch(err => console.error('Error fetching treatments:', err));
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
      {manageItems.map((manageItem,index) => (
         <tr key={manageItem._id}>
             <th>{index + 1} </th>
            
         <td>
           <div className="flex items-center gap-3">
             <div className="avatar">
               <div className="mask mask-squircle h-12 w-12">
                 <img
                   src={manageItem.logo}
                   alt="Avatar Tailwind CSS Component" />
               </div>
             </div>
            
           </div>
         </td>
         <td>
           {manageItem.treatment}
           
         </td>
         <td> {manageItem.balance}</td>
         <td>
           <p className="box">{manageItem.description}</p>
         </td>
        
       </tr>
      ))}
        
    
     
     
    </tbody>
   
  </table>
</div>
    );
};

export default ManageBooking;