import React,{Component} from 'react';
import Link from 'next/link'
import { getLayout } from '../components/layouts/SiteLayout'

export default class Services extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="w-full p-6 bg-blue-100">
        <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">OUR SERVICES</div>
          <div className="p-2 text-center text-lg text-gray-700">We offer the best web development solutions.</div>
            <div className="flex justify-center flex-wrap p-10">
              <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                <div className="flex items-center w-48 h-20 bg-blue-700">
                  <svg className="flex ml-16 items-center h-12 w-10" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false"   preserveAspectRatio="xMidYMid meet" viewBox="0 0 640 512"><path d="M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48C28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56c-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44c34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40c35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z" fill="#FFFFFF"/></svg>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">UI DESIGN</p>
                <p className="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-blue-700 text-center cursor-pointer">
                  <svg viewBox="0 0 32 32" className="inline-block h-6 w-6 mr-2 icon icon-chevron-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
                </div>
              </div>
              <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                <div className="flex text-center items-center w-48 h-20 bg-red-600">
                  <svg className="ml-16 items-center h-12 w-10" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 5 2 C 3.355469 2 2 3.355469 2 5 L 2 35 C 2 36.644531 3.355469 38 5 38 L 19 38 L 19 40 L 10 40 C 9.96875 40 9.9375 40 9.90625 40 C 9.636719 40.027344 9.386719 40.160156 9.21875 40.375 L 4.21875 46.375 C 3.976563 46.675781 3.929688 47.085938 4.097656 47.433594 C 4.265625 47.78125 4.617188 48 5 48 L 45 48 C 45.382813 48 45.734375 47.78125 45.902344 47.433594 C 46.070313 47.085938 46.023438 46.675781 45.78125 46.375 L 40.78125 40.375 C 40.589844 40.136719 40.304688 40 40 40 L 31 40 L 31 38 L 45 38 C 46.644531 38 48 36.644531 48 35 L 48 5 C 48 3.355469 46.644531 2 45 2 Z M 5 4 L 45 4 C 45.554688 4 46 4.445313 46 5 L 46 35 C 46 35.554688 45.554688 36 45 36 L 5 36 C 4.445313 36 4 35.554688 4 35 L 4 5 C 4 4.445313 4.445313 4 5 4 Z M 6 6 L 6 34 L 44 34 L 44 6 Z M 8 8 L 42 8 L 42 32 L 8 32 Z M 19.28125 11.28125 L 11.28125 19.28125 L 10.59375 20 L 11.28125 20.71875 L 19.28125 28.71875 L 20.71875 27.28125 L 13.4375 20 L 20.71875 12.71875 Z M 30.71875 11.28125 L 29.28125 12.71875 L 36.5625 20 L 29.28125 27.28125 L 30.71875 28.71875 L 38.71875 20.71875 L 39.40625 20 L 38.71875 19.28125 Z M 21 38 L 29 38 L 29 42 L 21 42 Z M 10.46875 42 L 19 42 L 19 44 L 31 44 L 31 42 L 39.53125 42 L 42.875 46 L 7.125 46 Z"/></svg>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">WEB DEV</p>
                <p className="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-blue-700 text-center cursor-pointer">
                  <svg viewBox="0 0 32 32" className="inline-block h-6 w-6 mr-2 icon icon-chevron-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
                </div>
              </div>
              <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                <div className="flex items-center w-48 h-20 bg-blue-500">
                  <svg className="ml-16 items-center h-12 w-10" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px"><path d="M 12 1 C 11.476563 1 10.941406 1.183594 10.5625 1.5625 C 10.183594 1.941406 10 2.476563 10 3 L 10 47 C 10 47.523438 10.183594 48.058594 10.5625 48.4375 C 10.941406 48.816406 11.476563 49 12 49 L 38 49 C 38.523438 49 39.058594 48.816406 39.4375 48.4375 C 39.816406 48.058594 40 47.523438 40 47 L 40 3 C 40 2.476563 39.816406 1.941406 39.4375 1.5625 C 39.058594 1.183594 38.523438 1 38 1 Z M 12 3 L 38 3 L 38 47 L 12 47 Z M 14 5 L 14 29 L 36 29 L 36 5 Z M 16 7 L 34 7 L 34 27 L 16 27 Z M 25 30 C 23.894531 30 23 30.894531 23 32 C 23 33.105469 23.894531 34 25 34 C 26.105469 34 27 33.105469 27 32 C 27 30.894531 26.105469 30 25 30 Z M 18 35 C 15.789063 35 14 36.789063 14 39 L 14 41 C 14 43.210938 15.789063 45 18 45 L 32 45 C 34.210938 45 36 43.210938 36 41 L 36 39 C 36 36.789063 34.210938 35 32 35 Z M 18 37 L 20 37 L 20 39 L 16 39 C 16 37.808594 16.808594 37 18 37 Z M 22 37 L 28 37 L 28 39 L 22 39 Z M 30 37 L 32 37 C 33.191406 37 34 37.808594 34 39 L 30 39 Z M 16 41 L 20 41 L 20 43 L 18 43 C 16.808594 43 16 42.191406 16 41 Z M 22 41 L 28 41 L 28 43 L 22 43 Z M 30 41 L 34 41 C 34 42.191406 33.191406 43 32 43 L 30 43 Z"/></svg> 
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">MOBILE APPS</p>
                <p className="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-blue-700 text-center cursor-pointer">
                  <svg viewBox="0 0 32 32" className="inline-block h-6 w-6 mr-2 icon icon-chevron-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
                </div>
              </div>
              <div className="relative w-48 h-64 m-5 bg-white shadow-lg">
                <div className="flex items-center w-48 h-20 bg-red-400">
                  <svg className="ml-16 items-center h-12 w-10" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"/></svg>
                </div>
                <p className="mx-2 py-2 border-b-2 text-center text-gray-700 font-semibold uppercase">SEO</p>
                <p className="p-2 text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac est massa.</p>
                <div className="absolute right-0 bottom-0 w-8 h-8 bg-gray-300 hover:bg-blue-700 text-center cursor-pointer">
                  <svg viewBox="0 0 32 32" className="inline-block h-6 w-6 mr-2 icon icon-chevron-right" viewBox="0 0 32 32" aria-hidden="true"><path d="M18.629 15.997l-7.083-7.081L13.462 7l8.997 8.997L13.457 25l-1.916-1.916z"/></svg>
                </div>
              </div>
            </div>
        </div>
      );
  }
}

Services.getLayout = getLayout