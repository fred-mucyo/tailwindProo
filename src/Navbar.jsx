import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



function Navbar() {
 return (
    
    <div className="max-w-full flex items-center justify-between bg-blue-50 px-10 py-3">
 <div className='flex items-center gap-4'>
<img src='/images/yt.svg' className='w-5 h-3 cursor-pointer'/>
<img src='/images/fb.svg' className='w-5 h-3 cursor-pointer'/>
<img src='/images/linkIn.svg' className='w-5 h-3  cursor-pointer'/>
<img src='/images/ig.svg'className='w-5 h-3  cursor-pointer'/>
<img src='/images/x.svg'className='w-5 h-3  cursor-pointer'/>
</div> 


<div className='flex items-center gap-4 '>

<div className='bg-white border-amber-950'>
 <select name='onlineservices' id='OnlineServices'className='bold'>
<option value='' disabled selected> Online services</option>
<option value='employeeNumber'>Apply for the employee number</option>
<option value='checkFor'>Check for contributions</option>
<option value='pay'>Pay employee contributions</option>
<option value='clearance'>RSSB Clearance certificate</option>
<option value='kwivuza'>Kwivuza</option>
</select>
</div>

<button>publication</button>
</div>

</div>
    
  )
}

export default Navbar




// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";

// function Navbar() {
//   return (
//     <nav className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between">

//       {/* LEFT: Social Icons */}
//       <div className="flex items-center gap-4">
//         <img src="/images/yt.svg" className="w-5 h-5 cursor-pointer hover:opacity-70" />
//         <img src="/images/fb.svg" className="w-5 h-5 cursor-pointer hover:opacity-70" />
//         <img src="/images/linkIn.svg" className="w-5 h-5 cursor-pointer hover:opacity-70" />
//         <img src="/images/ig.svg" className="w-5 h-5 cursor-pointer hover:opacity-70" />
//         <img src="/images/x.svg" className="w-5 h-5 cursor-pointer hover:opacity-70" />
//       </div>

//       {/* RIGHT: Dropdown + Button */}
//       <div className="flex items-center gap-4">
//         <select
//           name="onlineServices"
//           id="OnlineServices"
//           className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//           defaultValue=""
//         >
//           <option value="" disabled>
//             Online services
//           </option>
//           <option value="employeeNumber">Apply for employee number</option>
//           <option value="checkFor">Check for contributions</option>
//           <option value="pay">Pay employee contributions</option>
//           <option value="clearance">RSSB Clearance certificate</option>
//           <option value="kwivuza">Kwivuza</option>
//         </select>

//         <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm">
//           Publication
//         </button>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
