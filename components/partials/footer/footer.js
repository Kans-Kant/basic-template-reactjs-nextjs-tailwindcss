import {Component} from 'react';
import React from 'react';
import Link from "next/link";


export default class Footer extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="w-full bg-blue-900">
         <div className="flex flex-wrap text-center text-white">

          <div className="w-full md:w-1/3 p-5 border-r border-blue-800 md:text-left">
            <div className="my-6 ml-3 text-xl font-semibold">More Links</div>
            <ul className="block font-semibold">
              <li className="mr-6 p-1 m-1 border-b-2 border-white">
                <a className="text-blue-200 cursor-default" href="/">Home</a>
              </li>
              <li className="mr-6 p-1 border-b-2 border-white">
                <a className="text-white hover:text-blue-300" href="/services">Services</a>
              </li>
              <li className="mr-6 p-1 border-b-2 border-white">
                <a className="text-white hover:text-blue-300" href="/contact">Contact</a>
              </li>
              <li className="mr-6 p-1 border-b-2 border-white">
                <a className="text-white hover:text-blue-300" href="/about">Team</a>
              </li>
              <li className="mr-6 p-1 border-b-2 border-white">
                <a className="text-white hover:text-blue-300" href="/contact">Send Message</a>
              </li>
              <li className="mr-6 p-1 border-b-2 border-white">
                <a className="text-white hover:text-blue-300" href="/login">Sign In</a>
              </li>
            </ul>
          </div>

        <div className="w-full md:w-1/3 p-5 border-r border-blue-800">
          <div className="my-6 text-xl font-semibold">CONTACT US</div>
          <p className="mt-8 text-gray-400">
            Saada 97 street <br/>
            Marrakech, BP 4000 <br/>
            Maroc <br/>
            <strong>Phone:</strong> +212 Tel <br/>
            <strong>Email:</strong> exemple@gmail.com
          </p>
          <div className="relative w-20 h-20 mx-auto my-12 bg-blue-300 rotate-45">
            <div className="flex justify-center items-center absolute left-0 top-0 w-10 h-10 hover:-ml-1 hover:-mt-1 bg-blue-800 cursor-pointer">
              <svg className="bg-blue text-blue-700 inline-block h-6 w-6 mr-2 -rotate-45" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook icon</title><path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"/></svg>
            </div>
            <div className="flex justify-center items-center absolute top-0 right-0 w-10 h-10 hover:-mt-1 hover:-mr-1 bg-blue-800 cursor-pointer">
              <svg className="inline-block h-5 w-5 mr-2 -rotate-45" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg>
            </div>
            <div className="flex justify-center items-center absolute right-0 bottom-0 w-10 h-10 hover:-mr-1 hover:-mb-1 bg-blue-800 cursor-pointer">
              <svg className="inline-block h-5 w-5 mr-2 -rotate-45" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </div>
            <div className="flex justify-center items-center absolute bottom-0 left-0 w-10 h-10 hover:-mb-1 hover:-ml-1 bg-blue-800 cursor-pointer">
              <svg className="text-white inline-block h-5 w-5 mr-2 -rotate-45" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter icon</title><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/></svg>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 p-5">
          <div className="mt-6 text-xl font-semibold">NEWSLETTER</div>
          <form className="w-4/5 mx-auto mt-2 px-6 pt-6 pb-4 rounded">
            <div className="flex items-center mb-4">
             Subscribe to our newsletter to be informed about things coming
            </div>
             <div className="mt-4 flex">
            <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address"/>
            <button className="bg-green-700 text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
        </div>
          </form>
        </div>

      </div>
    </div> 
      );
  }
}
  
