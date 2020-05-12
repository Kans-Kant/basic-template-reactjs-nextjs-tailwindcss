import React,{Component} from 'react';
import Link from 'next/link';
import { getLayout } from '../components/layouts/SiteLayout';

export default class Login extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="mt-8 max-w-xl mx-auto px-25">
        <div>
          <button
            className="bg-blue-700 shadow appearance-none border text-center rounded w-full py-2 px-3 text-white leading-tight focus:outline-none "
            id="facebook" ><svg className="bg-blue text-blue-700 inline-block h-6 w-6 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>Sign in with Facebook</button><br/><br/>
          <button type="button"
            className="bg-white text-black shadow appearance-none text-center border rounded w-full py-2 px-3 leading-tight focus:outline-none hover:text-blue-700"
            id="google" >
            <svg className="inline-block h-5 w-5 mr-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>Sign In with Google</button><br/>
        </div>
        <div className="border-teal p-8 border-t-12 bg-white mb-6 rounded-lg shadow-lg">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
              <p className="text-red-500 text-xs italic">Please choose a password.</p>
            </div>
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">
                forgot Password ?
              </a>
            </div>
            <br/>
          </form>
          <p className="text-center text-gray-500 text-xs">
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/register">
              do not have an account yet ?
            </a> 
          </p>
        </div>
      </div>
    );
  }
}

Login.getLayout = getLayout

