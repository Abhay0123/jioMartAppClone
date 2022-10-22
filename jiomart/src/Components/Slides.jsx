import ImageSlider from "./ImageSlider.js"; 

const Slides=()=>{

    const slides=[
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666271199_1666095942_1665682688_Main-Banner1.jpg'},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666271632_Rice--oil-Combo-1680-320.jpg'},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666268559_Beauty.jpg'},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666268975_Kitchenware_1680x320.jpg'},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666269670_Fashion-2_-Beauty-1680.jpg'},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666270151_laptops--Tablets.jpg'},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666263850_Web_Mumbai_PremiumFruits.jpg'},
        {url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1666273781_1665668249_Audio-Gear_DT.jpg"},
        {url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1666268789_Android-Banner-1680-320.jpg"},
        {url:'https://www.jiomart.com/images/cms/aw_rbslider/slides/1666283905_Home--kitchen-Appliances_Without-Logo_1680x320.jpg'},
        {url:"https://www.jiomart.com/images/cms/aw_rbslider/slides/1666270367_mom--baby.jpg"}
             ]

    return (
        <div style={{width:'100%'}}>
            <div> <ImageSlider slides={slides}/></div>
            
        </div>
      
     )
}
export default Slides;
