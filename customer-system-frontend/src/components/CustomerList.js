import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
import Customer from './Customer';

const CustomerList = () => {
    const navigate = useNavigate();
    const [customers,setCustomers] = useState(null);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try {
                const response = await CustomerService.getCustomers();
                setCustomers(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[]);

    const deleteCustomer = (e,id) =>{
        e.preventDefault();
        CustomerService.deleteCustomer(id)
        .then((res) =>{
            if(customers){
                setCustomers((prevElement) =>{
                    return prevElement.filter((customer) => customer.id !== id);
                });
            }
        })
    }
    
    return (
    <div className='container mx-auto my-8 px-3 '>
        <div className='h-12'>
            <button onClick={()=>navigate("/addCustomer")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>AddCustomer</button>
        </div>
        <div className='flex shadow border-b'>
            <table className='min-w-full '>
                <thead className='bg-slate-200'>
                    <tr>
                        <th className='text-left font-medium text-black uppercase tracking-wider py-3 px-6'>First Name</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>Last Name</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>Street</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>Address</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>City</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>State</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>Email Id</th>
                        <th className='text-left font-medium  text-black uppercase tracking-wider py-3 px-6'>Phone Number</th>
                        <th className='text-right font-medium  text-black uppercase tracking-wider py-3 px-6'>Actions</th>
                    </tr>
                </thead>
                {!loading && (
                    <tbody className='bg-gray-50'>
                        {customers.map((customer)=>(
                            <Customer customer={customer} deleteCustomer={deleteCustomer} key={customer.id}/>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    </div>
  )
}

export default CustomerList;
