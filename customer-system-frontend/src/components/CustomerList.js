import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
import Customer from './Customer';
import { IoIosSearch } from "react-icons/io";

const CustomerList = () => {
    const navigate = useNavigate();
    const [customers,setCustomers] = useState(null);
    const [loading,setLoading] = useState(true);
    const [selectAttribute,setSelectAttribute] = useState("");
    const [searchAttribute,setSearchAttribute] = useState("");

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

    useEffect(()=>{
        const fetchData = async () =>{
            setLoading(true);
            try {
                const response = await CustomerService.searchCustomer({
                    type:selectAttribute,
                    search:searchAttribute
                });
                setCustomers(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[searchAttribute]);




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

    function handleSelect(e){
        setSelectAttribute(e.target.value);
    }
    function handleSearch(e){
        setSearchAttribute(e.target.value);
        
    }
    
    return (
    <div className='container mx-auto my-8 px-3 '>
        <div className='h-12 input-box'>
            <button onClick={()=>navigate("/addCustomer")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>AddCustomer</button>
            <select value={selectAttribute} onChange={handleSelect} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>
                <option value="" disabled> Select an option</option>
                <option value="firstName">First Name</option>
                <option value="emailId">Email Id</option>
                <option value="city">City</option>
                <option value="state">State</option>
            </select>
            <div className='border flex rounded text-black px-6 py-2 font-semibold input-bar'>
                <IoIosSearch className='text-black size-6 mx-1'/>
                <input className='inputSearch' placeholder='Search' onChange={handleSearch}/>
            </div>
            <button className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Sync</button>
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
                {!loading && customers!==null && (
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
