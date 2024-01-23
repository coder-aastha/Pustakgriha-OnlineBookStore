import React from 'react';
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import '../css/Admin.css';
import { IoCloudUploadOutline } from 'react-icons/io5';
import { HiBookmarkSquare } from 'react-icons/hi2';
import AdminBookUpload from './AdminBookUpload';
import { NavLink } from 'react-router-dom';
 
function AdminSideBar({ openSidebarToggle, OpenSidebar }) {
  const handleUploadBook = () => {};
 
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> SHOP
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>
          X
        </span>
      </div>
 
      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
        <NavLink to="/admin" className="nav-link_admin" activeClassName="active">
            <BsGrid1X2Fill className='icon' /> Dashboard
            </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/AdminManageBook/:id" className="nav-link_admin" activeClassName="active">
            <HiBookmarkSquare className='icon' /> Manage Book
          </NavLink>
        </li>
 
        <li className='sidebar-list-item'>
          <NavLink to="/upload-book" className="nav-link_admin" activeClassName="active">
            <IoCloudUploadOutline className='icon' /> Upload
          </NavLink>
        </li>
 
        <li className='sidebar-list-item'>
          <NavLink to="/customers" className="nav-link_admin" activeClassName="active">
            <BsPeopleFill className='icon' /> Customers
          </NavLink>
        </li>
 
        <li className='sidebar-list-item'>
          <NavLink to="/booklisting" className="nav-link_admin" activeClassName="active">
            <BsFillArchiveFill className='icon' /> Products
          </NavLink>
        </li>
 
        <li className='sidebar-list-item'>
          <NavLink to="/settings" className="nav-link_admin" activeClassName="active">
            <BsFillGearFill className='icon' /> Settings
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}
 
export default AdminSideBar;