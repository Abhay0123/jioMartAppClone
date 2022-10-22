import React from "react";
import {DrawerUser,List,DropDownIcon}  from "./FunctionChakra";
import {Input,Text} from '@chakra-ui/react';
import Slides from './Slides.jsx';
const Navbar=()=>{
    return (
      <div className="navbar"> 
         <div className="navbar_c1" style={{width:'100%',height:'75px',padding:'15px',backgroundColor:'#0778f1'}}>
            <div style={{display:'flex',justifyContent:'space-around', alignItems:'center'}}>
             <DrawerUser/>
             <a href="#" className="logo">
             <img src="https://www.jiomart.com/assets/version1665662693/smartweb/images/jiomart_logo_beta.svg" alt="logo" />
             </a>
            
             <input className="input" placeholder='  Search essential groceries, and more ...' />
             
                <div style={{width:"50px",height:'40px',borderRadius:'0px 10px 10px 0px',background:'white',marginLeft:'-60px'}}>
                  
                    <List/>
               
                </div>
       
             
            
             <a href="" className="user">
             <img src="	https://www.jiomart.com/msassets/images/icons/loginicon_be.svg" alt="user" />
             
             <Text as='b'>Sign in / Sign up</Text>
             </a>
           
           
            <a className="cart" href="#" >
            <img src="	https://www.jiomart.com/assets/version1665662693/jiomsite/images/icons/cart.svg" alt="cart" />
          
           <Text as='b'>Cart</Text>
            </a>
    
            </div>
           

            </div>   
    {/* Navbar => bottom part */}        
   
              
              <div className="menubar">
                <ul>
                  <li className="active1"><a href="#">Groceries <DropDownIcon/></a>
                  <div className="deepmenu1">
                  <ul style={{display:'inline-block'}} className='menu'>
                                            
                          <div> <li><a>Fruits & Vegetables</a></li></div>
                          <div><li><a>Dairy & Bakery</a></li></div>
                          <div> <li><a>Staples</a></li></div>
                          <div><li><a href="">Snacks & Branded Foods</a></li></div>
                          <div><li><a href="">Beverages</a></li></div>
                          <div><li><a href="">Personal Care</a></li></div>
                          <div><li><a href="">Home Care</a></li></div>

                          </ul>
                          <div className="vertical_line"></div>
                           <ul style={{display:'inline-block',margin:'-200px 0px 0px 20px'}} className='menu'>
                           <div>  <li><a href="#"> Apparel</a></li></div> 
                           <div>  <li><a href="#">Home & Kitchen</a> </li></div> 
                           <div>  <li><a href="#">Mom & Baby Care</a></li></div> 
                           <div>  <li><a href="#">Books</a> </li></div> 
                           <div>  <li><a href="#">Pets</a> </li></div> 
                           <div>  <li><a href="#">Beauty</a> </li></div> 
                           </ul>
                         </div>                          
                      </li>
                     
                  <li  className="active2">
                    <a href="#"> Premium Fruits<DropDownIcon/> </a>
                      <div className="deepmenu2">
                       
                          <ul style={{display:'inline-block',height:'160px'}} className='menu'>
                          <div className="sub"> <li><a>Apples & Pears</a></li></div>                     
                          <div> <li><a>Avocado, Peach, Plum</a></li></div>
                          <div><li><a>Banana, Melons & Coconut</a></li></div>
                          <div> <li><a>Cherries, Berries & Exotic Fruits</a></li></div>
                          <div>  <li><a href="#">Citrus, Mango & Grapes</a> </li></div> 
                          </ul>
                          <div className="vertical_line" style={{height:'190px',marginTop: "-190px"}}></div>
                           <ul style={{display:'inline-block',margin:'-200px 0px 0px 0px '}} className='menu'>
                           <div>  <li><a href="#"> Gift, Assorted & XL Packs</a></li></div> 
                           <div>  <li><a href="#">Organic & Residue Certified</a> </li></div> 
                           <div>  <li><a href="#"> Pomegranate, Papaya & Pineapple</a></li></div> 
                           <div>  <li><a href="#">Seasonal & Minor Fruits</a> </li></div> 
                        
                        
                           </ul>

                         </div>
                  
                  </li>
                  <li className="active3"><a href="#">Home & Kitchen<DropDownIcon/></a>
                      <div className="deepmenu3">
                      <ul style={{display:'inline-block'}} className='menu'>
                          <div className="sub"> <li><a>Bathroom & Laundry Accessories</a></li></div>                     
                          <div> <li><a>Disposablesr</a></li></div>
                          <div><li><a>Furnishing</a></li></div>
                          <div> <li><a>Furniture</a></li></div>
                          <div>  <li><a href="#">Garden & Outdoor</a> </li></div> 
                          </ul>
                          <div className="vertical_line" style={{height:'190px', marginTop: "-190px"}}></div>
                           <ul style={{display:'inline-block',margin:'-200px 0px 0px 0px '}} className='menu'>
                           <div>  <li><a href="#"> Home Decor</a></li></div> 
                           <div>  <li><a href="#">Kitchenware</a> </li></div> 
                           <div>  <li><a href="#">Prayer & Spiritual Needs Tableware</a></li></div> 
                         
                           <div>  <li><a href="#">TableWare</a> </li></div> 
                       </ul>
                         
                        </div>
                  
                  </li>
                  <li className="active4"><a  href="#">Fashion<DropDownIcon/></a>
                  
                      <div className="deepmenu4">
                      
                           <ul style={{display:'inline-block'}} className='menu'>
                           <div>  <li><a href="#">Men</a></li></div> 
                           <div>  <li><a href="#">Women</a> </li></div> 
                           <div>  <li><a href="#">Boys</a></li></div> 
                           <div>  <li><a href="#">Girls</a> </li></div> 
                           <div>  <li><a href="#">Infants</a> </li></div> 
                     
                       </ul>
                 </div>
                  
                  </li>
                  <li className='active5'><a href="#">Electronics<DropDownIcon/></a>

                     <div className="deepmenu5">
                     <ul style={{display:'inline-block'}} className='menu'>
                           <div>  <li><a href="#">Mobiles & Tablets</a></li></div> 
                           <div>  <li><a href="#">TV & Speaker</a> </li></div> 
                           <div>  <li><a href="#">Home Appliances</a></li></div> 
                           <div>  <li><a href="#">Computers</a> </li></div> 
                           <div>  <li><a href="#">Cameras</a> </li></div> 
                           <div>  <li><a href="#">Kitchen Appliances</a></li></div> 
                           <div>  <li><a href="#">Personal Care & Grooming</a> </li></div> 
                           <div>  <li><a href="#">Smart Devices</a></li></div> 
                           <div>  <li><a href="#">Gaming</a> </li></div> 
                           <div>  <li><a href="#">Accessories</a> </li></div> 
                           <div>  <li><a href="#">Phones</a> </li></div> 
                           <div>  <li><a href="#">Office Products</a> </li></div> 
                           <div>  <li><a href="#">Health Care Devices</a> </li></div> 
                          
                       </ul>
                       </div>
                  </li>
                  <li className="active6"><a href="#">Beauty<DropDownIcon/> </a>

                   <div className="deepmenu6">
                    <ul style={{display:'inline-block'}} className="menu">
                           <div><li><a href="#">Make-Up</a></li></div>
                           <div><li><a href="#">Hair</a></li></div>
                           <div><li><a href="#">Skin Care</a></li></div>
                           <div><li><a href="#">Fragrance</a></li></div>
                           <div><li><a href="#">Personal Care</a></li></div>
                           <div><li><a href="#">Mom & Baby</a></li></div>
                           <div><li><a href="#">Men's Grooming</a></li></div>
                           <div><li><a href="#">Tools & Appliances</a></li></div>
                           <div><li><a href="#">Covid Essentials</a></li></div>
                           <div><li><a href="#">Wellness</a></li></div>
                           <div><li><a href="#">Fitness</a></li></div>
                           <div><li><a href="#">Ayush</a></li></div>
                           <div><li><a href="#">Treatments</a></li></div>
                   </ul>


                          </div>
                  </li>
                  <li className='active7'><a href="#">Jewellery<DropDownIcon/></a>
                    <div className="deepmenu7">
                    <ul style={{display:'inline-block'}} className="menu">
                          <div><li><a href="#">Fine Jewellery</a></li></div>
                          <div><li><a href="#">Jewellery</a></li> </div>
                    </ul>
                    </div>
                </li>
                  <li className='active8'><a href="#">Home Improvemrnt<DropDownIcon/></a>
           
                  <div className="deepmenu8">
                  <ul style={{display:'inline-block'}} className="menu">
                           <div><li><a href="#">Auto Care</a></li></div>
                           <div><li><a href="#">Carpentry</a></li></div>
                           <div><li><a href="#">Electrical</a></li></div>
                           <div><li><a href="#">Hardware & Plumbing</a></li></div>
                           <div><li><a href="#">Home Cleaning & Organisation</a></li></div>
                           <div><li><a href="#">Industrial & Scientific Supplies</a></li></div>
                           <div><li><a href="#">Home Safety & Automation</a></li></div>
                           <div><li><a href="#">Kitchen & Bath Fixtures</a></li></div>
                           <div><li><a href="#">Packaging Supplies</a></li></div>
                           <div><li><a href="#">Paint, Wall Treatments & Supplies</a></li></div>
                           <div><li><a href="#">Power & Hand Tools</a></li></div>
                           </ul>
                          </div>
                 
                  </li>
                  <li className="active9"><a href="#">Sports, Toys & Luggage<DropDownIcon/></a>
                      <div className="deepmenu9">
                     <ul style={{display:'inline-block'}} className="menu"> 

                          <div><li><a href="#">Toys & Games</a></li></div>
                          <div><li><a href="#">Bags & Travel Luggage</a></li></div>
                          <div><li><a href="#">Sporting Goods & Fitness Equipment</a></li></div>
                          <div><li><a href="#">Sporting Goods & Fitness Equipments</a></li></div>
                     </ul>
                       </div>
                  </li>
                 
                </ul>
              </div>
            
                  <Slides/> 
              <div style={{marginTop:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1665654011_SBI_Unit.jpg" alt="sbi_disount" /></div>
               
               <div>
               <div style={{marginTop:'20px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1666163220_BS_Flash-Deals_Banner_1680x320.jpg" alt="sbi_disount" /></div>
                
                </div>  
    </div>
   
     )
}
export default Navbar;