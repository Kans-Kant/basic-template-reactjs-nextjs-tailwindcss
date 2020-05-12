import React,{Component} from 'react';
import Link from "next/link";

import Footer from './footer/footer';
import Header from './header/header';

export default class SiteLayout extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="bg-white antialiased">
    <div>
      <div>
        <div >
        <Header></Header>
        </div>
      </div>
    </div>
    <div className="mt-6 sm:mt-0 sm:py-12">{this.props.children}</div>
    <Footer> </Footer>
  </div>
      );
  }
}

export const getLayout = page => <SiteLayout>{page}</SiteLayout>;
