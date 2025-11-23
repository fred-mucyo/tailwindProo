import React from "react";

function Body() {
  return (
    <div>
      <div className="relative">
        {/* This is the background image */}
   
        <img className='w-full h-96 blur-xs object-cover bg-blue-50 border border-blue-50' src="/images/oldies.png" alt="Background image" />
            
        {/* This is the top image (front) */}
     
        <div className="absolute transform right-0 bottom-70 -translate-y-40 h-3">
          {/* Using h-64 for a defined height example */}
          <img className="w-200 h-112 " src="/images/oldies.png" alt="Front image" />
        </div>

         <div className=" absolute top-33 left-18 font-stretch-200% font-bold">EJOHEZA <span className="text-amber-300">Save </span> 
          for a better future for you and your family.
         <div className="text-blue-700">Ejo heza</div>

         <button className="absolute border-blue-600 bg-blue-800 top-20 h-14 w-40 rounded-xl text-white">Learn more</button>
      
      <div className="absolute flex justify-between gap-0 top-35 left-51">
      <div className="bg-white w-96 px-4 border border-blue-100">  
        <img className="w-9 py-4" src="/images/first.png"/>
        Member First
        <div>13 Million of Rwandans are covered by RSSB service</div>
      </div>
      <div className="bg-white  border  border-blue-100 px-4">
         <img className="w-9 py-4" src="/images/second.png"/>
        Experience
        <div>60 years of service for your safety and well-being</div>
      </div>
      <div className="bg-white border  border-blue-100 px-4">
         <img className="w-9 py-4" src="/images/third.png"/>
        Branches
        <div>Our services decentralized in 30 branches for your satisfaction</div>
      </div>
      <div className="bg-white  border  border-blue-100 w-90 h-44 px-4">
         <img className="w-9 py-4" src="/images/fourth.png"/>
        Data Driven <div>Learning from our data to improve the services offered to our members</div></div>
  
      </div>
      
      
      
      </div>
      </div>



<div className="mt-30 flex  flex-col items-center text-3xl">
      <div className="font-bold">Optimistic and forward-looking </div>
<div className="font-bold">agent of central government, working to achieve </div>
    <div className="font-bold text-blue-950">the financial security and health of </div>
             <div className="font-bold  text-blue-950">all Rwandans.</div>
</div>





<div className="flex justify-center mt-20 text-2xl text-blue-800 font-bold">
<div className="bg-amber-300 w-7 h-1 mt-4 "></div>SOCIAL PROTECTION SCHEMES</div>



{/* SOCIAL PROTECTION SCHEMES */}

<div className="w-90 mt-30 ml-30">

<div className="flex flex-row gap-4 ">

<img src="/images/pic1.jpeg"/>
<img src="/images/pic2.jpeg"/>
<img src="/images/pic3.jpeg"/>
</div>

<div className="flex flex-row gap-4 mt-6">
<img src="/images/pic4.jpeg"/>
<img src="/images/pic5.jpeg"/>
<img src="/images/pic6.jpeg"/>

</div>
</div>



















     
    </div>
  );
}

export default Body;
