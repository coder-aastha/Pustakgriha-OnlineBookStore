import AdminSideBar from "./AdminSideBar";
import { useState } from 'react';
import AdminSales from "./AdminSales";

const App =()=> {
    const [openAdminSideBarToggle, setOpenAdminSideBarToggle] = useState(false)
  
    const OpenAdminSideBar = () => {
      setOpenAdminSideBarToggle(!openAdminSideBarToggle)
    }
  
    return (
       
      <div className="grid-container">
        <AdminSideBar openAdminSideBarToggle={openAdminSideBarToggle} OpenAdminSideBar={OpenAdminSideBar}/>
        <AdminSales />
      </div>
    );
}

export default App;