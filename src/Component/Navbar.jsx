import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
           <div className="navbar bg-base-100 px-4 md:px-6 lg:px-12">
  <div className="flex-1">
    <Link to='/' className=" text-lg font-bold">Money Mate</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
  <li>
    <NavLink to='/' className='font-bold'>Home</NavLink>
  </li>
  <li tabIndex={0}>
    <details>
      <summary className='font-bold'>Dashboard</summary>
      <ul className="bg-base-100 rounded-t-none p-2">
        <li><NavLink to='/total-expense' className='font-bold'>Total Expense</NavLink></li>
        <li><NavLink to='/add-expense' className='font-bold'>Add Expense</NavLink></li>
      </ul>
    </details>
  </li>
</ul>
  </div>
</div>
        </div>
    );
};

export default Navbar;