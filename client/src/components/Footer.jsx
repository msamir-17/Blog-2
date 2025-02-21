// import { Footer } from 'flowbite-react';
import { Footer, FooterLink, FooterLinkGroup } from "flowbite-react";
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { BsTwitter } from "react-icons/bs";
export default function FooterCom() {
  return( 
    <Footer container className=' border border-t-8 border-teal-500' >
      <div className=" w-full max-w-7xl mx-auto ">
        <div className=" grid w-full justify-between sm:flex md:grid-cols-1 ">
            <div className=" mt-5  ">
              <Link                
                  to="/" 
                  className='self-center whitespace-nowrap text-lg
                  sm:text-xl font-semibold dark:text-white' >
                  <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white ' >
                    Sam</span>
                  Blog
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <h3>ABOUT</h3>                
                <FooterLinkGroup>                    
                  <FooterLink href="https://github.com/msamir-17"
                    target="_blank"
                    rel="noopener noreferrer"
                  > Projects 
                  </FooterLink>

                  <FooterLink href="/about" 
                  target="_blank"
                    rel="noopener noreferrer" >
                    Sam-Blogs
                    </FooterLink>
                </FooterLinkGroup>
              </div>  

              <div>
                <h3>FOLLOW US</h3>                
                <FooterLinkGroup>                    
                  <FooterLink href="https://github.com/msamir-17"
                    target="_blank"
                    rel="noopener noreferrer"
                  > GitHub 
                  </FooterLink>

                  <FooterLink href="" 
                  target="_blank"
                    rel="noopener noreferrer" >
                    LinkedIn
                    </FooterLink>
                </FooterLinkGroup>
              </div> 

              <div>
                <h3>LEGAL</h3>                
                <FooterLinkGroup>                    
                  <FooterLink href=""> 
                    Privacy 
                  </FooterLink>

                  <FooterLink href="">
                    Term & Conditions
                  </FooterLink>
                </FooterLinkGroup>
              </div>

            </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Sam-Blogs" year={new Date().getFullYear()} />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center  ">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="https://github.com/msamir-17" icon={BsGithub}/>
            <Footer.Icon href="#" icon={BsLinkedin}/>
            <Footer.Icon href="#" icon={BsTwitter}/>
          </div>
        </div>
      </div>
    </Footer>
  )
}


