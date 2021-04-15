import React from 'react';
import SideBar from '../../SideBar/SideBar';
import OrderList from '../OrderList/OrderList';

const Admin = () => {
    return (
        <div>
            <SideBar></SideBar>
            <OrderList></OrderList>
            
        </div>
    );
};

export default Admin;