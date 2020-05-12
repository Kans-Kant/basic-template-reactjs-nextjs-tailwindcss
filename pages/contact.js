import React,{Component} from 'react';
import Link from 'next/link'
import { getLayout } from '../components/layouts/SiteLayout'

export default class Contact extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="mt-8 max-w-xl mx-auto px-25">
        <p className="text-center">
          <h2 className="block text-gray-700 text-sm font-bold mb-2">Send Message</h2>
        </p>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <textarea className="shadow appearance-none rounded w-full h-24 px-2 pt-2 text-gray-700 mb-3 p-6 leading-tight focus:outline-none focus:shadow-outline" id="message"  placeholder="Message" ></textarea>
          </div>
          <div className="flex justify-between items-center">
              <button className="w-full py-2 px-4 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-bold" type="button">SEND <svg className="text-white inline-block h-5 w-5 ml-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Telegram icon</title><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.56-1.1.56-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg></button>
          </div>
        </form>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mt-8 text-black-400">
          <svg className="text-white inline-block h-5 w-5 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Maps icon</title><path d="M19.527 4.799c1.212 2.608.937 5.678-.405 8.173-1.101 2.047-2.744 3.74-4.098 5.614-.619.858-1.244 1.75-1.669 2.727-.141.325-.263.658-.383.992-.121.333-.224.673-.34 1.008-.109.314-.236.684-.627.687h-.007c-.466-.001-.579-.53-.695-.887-.284-.874-.581-1.713-1.019-2.525-.51-.944-1.145-1.817-1.79-2.671L19.527 4.799zM8.545 7.705l-3.959 4.707c.724 1.54 1.821 2.863 2.871 4.18.247.31.494.622.737.936l4.984-5.925-.029.01c-1.741.601-3.691-.291-4.392-1.987a3.377 3.377 0 0 1-.209-.716c-.063-.437-.077-.761-.004-1.198l.001-.007zM5.492 3.149l-.003.004c-1.947 2.466-2.281 5.88-1.117 8.77l4.785-5.689-.058-.05-3.607-3.035zM14.661.436l-3.838 4.563a.295.295 0 0 1 .027-.01c1.6-.551 3.403.15 4.22 1.626.176.319.323.683.377 1.045.068.446.085.773.012 1.22l-.003.016 3.836-4.561A8.382 8.382 0 0 0 14.67.439l-.009-.003zM9.466 5.868L14.162.285l-.047-.012A8.31 8.31 0 0 0 11.986 0a8.439 8.439 0 0 0-6.169 2.766l-.016.018 3.665 3.084z"/></svg> Location :<br/><br/>
            97 saada Street <br/>
            Marrakech, Ma 4000 <br/>
            Maroc <br/>
            <strong>Phone:</strong> +212 Tel <br/>
            <strong>Email:</strong> exemple@gmail.com<br/>
            <i className="fab fa-facebook-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
            <i className="fab fa-twitter-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
            <i className="fab fa-google-plus-square fa-2x mx-1 text-blue-500 hover:text-orange-500 cursor-pointer"></i>
          </p>
        </div>
      </div>
    );
  }
}

Contact.getLayout = getLayout