import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddCustomer from './components/AddCustomer';
import Navbar from './components/Navbar';
import CustomerList from './components/CustomerList';
import UpdateCustomer from './components/UpdateCustomer';
import SignupSignin from './components/SignupSignin';


function App() {
  return (
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<SignupSignin/>}/>
          <Route path='/' element={<SignupSignin/>}/>
          <Route path='/customerList' element={<CustomerList/>}/>
          <Route path='/addCustomer' element={<AddCustomer/>}/>
          <Route path='/editCustomer/:id' element={<UpdateCustomer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;