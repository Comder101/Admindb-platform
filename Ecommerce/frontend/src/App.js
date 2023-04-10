import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Routes, Outlet,
  createBrowserRouter, createRoutesFromElements
} from "react-router-dom";
import Modal from 'react-modal';

import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import AdminLogin from './components/forms/AdminLogin';
import AddDeliveryAgent from './components/forms/AddDeliveryAgent';
import AddInventoryManager from './components/forms/AddInventoryManager';
import AddProducts from './components/forms/AddProducts';
import SideBar from './components/SideBar';
import AddCategory from './components/forms/AddCategory';
import AddSubcategory from './components/forms/AddSubcategory';
// import AddProductCategory from './components/forms/AddProductCategory';
// import AddProductItem from './components/forms/AddProductItem';
import OrderPage from './pages/OrderPage';
import DeliveryPage from './pages/DeliveryPage';
import InventoryPage from './pages/InventoryPage';
import EditDeliveryAgent from './components/forms/EditDeliveryAgent';
import EditInventoryManager from './components/forms/EditInventoryManager';
import EditProduct from './components/forms/EditProduct';



Modal.setAppElement('#root');


function App() {
  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };
  const [login, setlogin] = useState(true);
  // const [result, setResult] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // const onConfirm = () => {
  //   setResult([true, true])
  //   setIsModalOpen(false)
  //   // setResult([false, false])
  // }
  // const onCancel = () => {
  //   setResult([true, false])
  //   setIsModalOpen(false)
  //   // setResult([false, false])
  // }

  // const shouldDelete = async () => {
  //   return new Promise((resolve, reject) => {
  //     setIsModalOpen(true);
  //     while (!result) { }
  //     resolve(result);
  //     setResult(null);
  //     setIsModalOpen(false);
  //   })
  // }

  return (
    <div className='flex font-poppins'>

      <Router>
        {/* <SideBar /> */}
        <Routes>
          <Route exact path='/dashboard' element={<SideBar />} >

            <Route exact path='home' element={<Home />} />
            <Route exact path="addcategory" element={<AddCategory />} />
            <Route exact path="addsubcategory" element={<AddSubcategory />} />
            <Route exact path="addproduct" element={<AddProducts />} />
            <Route exact path="viewproducts" element={<ProductPage />} />

            <Route exact path="adddeliveryagent" element={<AddDeliveryAgent />} />
            {/* <Route exact path="viewdeliveryagents" element={<Delivery shouldDelete={shouldDelete} result={result} />} /> */}
            <Route exact path="viewdeliveryagents" element={<DeliveryPage />} />

            <Route exact path="addinventorymanager" element={<AddInventoryManager />} />
            <Route exact path="viewinventorymanagers" element={<InventoryPage/>}/>

            <Route exact path="vieworders" element={<OrderPage />} />
            <Route exact path="updateproduct" />
            {/* <Route exact path="/updatecategory" />
          <Route exact path="/updatesubcategory" /> */}
            <Route exact path="updateinventorymanager" />
            <Route exact path="updatedeliveryagent" />

            <Route exact path="editdeliveryagent" element={<EditDeliveryAgent/>}/>
            <Route exact path="editinventorymanager" element={<EditInventoryManager/>} />
            <Route exact path="editproduct" element={<EditProduct/>} />
          </Route>


          <Route exact path="/" element={<AdminLogin />} />

        </Routes>
      </Router>
      {/* <Modal
        isOpen={isModalOpen}
        style={customStyles}
      >
        <h2>are you sure to delete this user?</h2>
        <button onClick={setResult(true)}>Yes</button>
        <button onClick={setResult(false)}>No</button>
      </Modal> */}
    </div>

  );
}

export default App;
