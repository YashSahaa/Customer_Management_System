import React, { useState } from 'react'
import CustomerService from '../services/CustomerService';
import { useNavigate } from 'react-router-dom';

const AddCustomer = () => {
    const [customer,setCustomer] = useState({
        id:"",
        firstName:"",
        lastName:"",
        street:"",
        address:"",
        city:"",
        state:"",
        emailId:"",
        phoneNumber:"",
    });

    const navigate = useNavigate();

    const handelChange = (e)=>{
        const value = e.target.value;
        setCustomer({...customer,[e.target.name]:value});
    }

    const saveCustomer = (e)=>{
        e.preventDefault();
        CustomerService.saveCustomer(customer)
        .then((response) =>{
        console.log(response);
        navigate("/customerList")
        }).catch((error) =>{
        console.log(error);
        });
    }
    
    const reset = (e) =>{
        e.preventDefault();
        setCustomer({
            id:"",
            firstName:"",
            lastName:"",
            street:"",
            address:"",
            city:"",
            state:"",
            emailId:"",
            phoneNumber:"",
        })
    }

    return (
        <div className='flex max-w-2xl bg-slate-50 mx-auto my-6 shadow border-b '>
            <div className='px-8 py-8'>
                <div className='font-thin text-2xl tracking-wider'>
                    <h1>Add New Customer</h1>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>First Name</label>
                    <input type='text' name='firstName' value={customer.firstName} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Last Name</label>
                    <input type='text' name='lastName' value={customer.lastName} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Street</label>
                    <input type='text' name='street' value={customer.street} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Address</label>
                    <input type='text' name='address' value={customer.address} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>City</label>
                    <input type='text' name='city' value={customer.city} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>State</label>
                    <input type='text' name='state' value={customer.state} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Email</label>
                    <input type='email' name='emailId' value={customer.emailId} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4'>
                    <label className='block text-gray-600 text-sm font-normal'>Phone Number</label>
                    <input type='text' name='phoneNumber' value={customer.phoneNumber} onChange={(e)=> handelChange(e)} className='h-10 w-96 border mt-2 px-2 py-2'/>
                </div>
                <div className='items-center justify-center h-14 w-full my-4 space-x-4 pt-4'>
                    <button onClick={saveCustomer}  className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>Save</button>
                    <button onClick={reset}  className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AddCustomer;

