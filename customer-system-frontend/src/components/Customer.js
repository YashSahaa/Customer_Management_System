import React from 'react'
import { useNavigate } from 'react-router-dom';

const Customer = ({customer, deleteCustomer}) => {
    const navigate = useNavigate();

    const editCustomer = (e,id) =>{
        e.preventDefault();
        navigate(`/editCustomer/${id}`);
    }

  return (
    <tr key={customer.id}>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.firstName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.lastName}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.street}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.address}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.city}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.state}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.emailId}</div>
        </td>
        <td className='text-left px-6 py-4 whitespace-nowrap'>
            <div className='text-sm text-gray-500'>{customer.phoneNumber}</div>
        </td>
        <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
            <button onClick={(e) =>editCustomer(e,customer.id)} className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer px-4 '>Edit</button>
            <button onClick={(e) =>deleteCustomer(e,customer.id)} className='text-indigo-600 hover:text-indigo-800 hover:cursor-pointer'>Delete</button>
        </td>
    </tr>
  )
}

export default Customer;
