import {Component} from 'react';
import React from 'react';
import Link from "next/link";

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
      isExpanded:false,
    }
    this.toggleExpansion=this.toggleExpansion.bind(this);
  }

  toggleExpansion(e){
    this.setState({isExpanded:!this.state.isExpanded});
  }
  render(){
    return(
      <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-3">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
          <span className="font-semibold text-xl tracking-tight">
            Desktlab
          </span>
        </div>
      <div className="block lg:hidden">
        <button onClick={this.toggleExpansion} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`${ this.state.isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
    
        <div className="text-center flex-1">
          <a href="/" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Home
          </a>
          <a href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            About Us
          </a>
          <a href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Contact
          </a>
          <a href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
            Services
          </a>

      <div className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        <form>
          <div className="bg-white flex items-center rounded-full px-1">
            <input className="rounded-l-full w-full text-gray-700 leading-tight focus:outline-none" id="search" type="text" placeholder="Search"/>
    
            <div className="p-1">
              <button className="bg-blue-500 text-white rounded-full hover:bg-blue-400 focus:outline-none flex items-center justify-center">
                <svg className="bg-white inline-block h-5 w-5 " fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
              </button>
            </div>
          </div>
        </form>
    </div>
      
    </div>
    <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row items-center sm:border-l sm:border-gray-300">
        <a rel="nofollow" title="Login Tailwind components" className="py-2 px-5 text-white sm:text-secondary opacity-75 hover:opacity-100 mt-8 sm:mt-0" href="/register">Register</a>
        <a rel="nofollow" title="Login Tailwind components" className="py-2 px-5 text-white sm:text-secondary opacity-75 hover:opacity-100 mt-8 sm:mt-0" href="/login">Login</a>
        <a rel="nofollow" title="Login Tailwind components" className="py-2 px-5 text-white sm:text-secondary opacity-75 hover:opacity-100 mt-8 sm:mt-0" href="/account-settings/basic-information">Account</a>
    </div>
    </div>
  </nav> 
  );
 }
}