import React from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Loading from "./pages/Loading"
import Messages from "./pages/Messages"
import MyOrders from "./pages/MyOrders"
import MyListing from "./pages/MyListing"
import Marketplace from "./pages/Marketplace"
import ListingDetails from "./pages/ListingDetails"
import ManageListing from "./pages/ManageListing"
import Navbar from "./components/Navbar"


 const App=()=>{

  const {pathname}=useLocation();

  return (           
    
      <div>
           {!pathname.includes("/admin") && <Navbar />}
           <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/loading' element={<Loading/>}  />
            <Route path='/messages' element={<Messages/>}  />
            <Route path='/my-orders' element={<MyOrders/>}  />
            <Route path='/my-listing' element={<MyListing/>}  />
            <Route path='/marketplace' element={<Marketplace/>} />
            <Route path='/listing?:listingId' element={<ListingDetails/>} />
            <Route path='/create-listing' element={<ManageListing/>} />
            <Route path='/edit-listing/:id' element={<ManageListing/>} />

           </Routes>

           </div>
  )
}

export default App;