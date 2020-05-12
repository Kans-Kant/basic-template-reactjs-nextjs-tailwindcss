import React,{Component} from 'react';
import Link from 'next/link'
import { getLayout } from '../components/layouts/SiteLayout'

export default class Index extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <section>
        <section className="container mx-auto px-6 p-10 mt-10">
          <div className="flex items-center flex-wrap mb-20">
            <div className="w-full md:w-1/2">
              <h4 className="text-3xl text-gray-800 font-bold mb-3">The</h4>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Most</h4>
              <h4 className="text-3xl text-gray-800 font-bold mb-3">Beautiful Website</h4>
              <p className="text-gray-600 mb-8">
                <button 
                  className="bg-black shadow appearance-none text-center border rounded-5 w-full md:w-1/2 py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  id="google" >
                  <svg className="inline-block h-5 w-5 mr-2" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg"><path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/><path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/><path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/><path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/></svg> Sign up with Google</button><br/><br/>
                     Sign up with Email
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="index.svg" alt="Monitoring" />
            </div>
          </div>
        </section>
        <section >
          <div className="container mx-auto px-6 text-center py-20">
            <h2 className="mb-6 text-4xl font-bold text-center text-black">
              Limited in Stock
            </h2>
            <h3 className="my-4 text-2xl text-black">
              Get yourself the most beautiful design !
            </h3>
            <button
              className="bg-white font-bold rounded-full mt-6 py-4 px-8 shadow-lg uppercase tracking-wider"
            >
              Pre Order
            </button>
          </div>
        </section>
      </section>

      );
  }
}

Index.getLayout = getLayout