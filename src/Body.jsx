import React from "react";

function Body() {
  return (
    <div>
      <div className="relative">
        {/* This is the background image */}
   
        <img className='w-full h-96 blur-xs object-cover border-b-8' src="/images/oldies.png" alt="Background image" />
            
        {/* This is the top image (front) */}
     
        <div className="absolute transform right-0 bottom-70 -translate-y-40 h-3">
          {/* Using h-64 for a defined height example */}
          <img className="w-200 h-112 shadow-lg" src="/images/oldies.png" alt="Front image" />
        </div>

         <div className=" absolute top-49 left-18 font-stretch-200% font-bold">EJOHEZA <span className="text-amber-300">Save </span> 
          for a better future for you and your family.
         <div className="text-blue-700">Ejo heza</div>

         <button className="absolute border-blue-600 bg-blue-800 top-20 h-14 w-40 rounded-xl text-white">Learn more</button>
      </div>
      </div>

     
    </div>
  );
}

export default Body;
