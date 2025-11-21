import React from "react";



function Herosection(){

return (
    <>
<div className="flex items-center  mt-16 gap-150 px-15" >

<div><img src="/images/rssb.png" className="w-40"/></div>

<div className="flex items-center gap-15 ">
<div className="flex gap-4 items-center">
<img src="/images/call.svg" className="w-5 h-5"/>

<div className="flex flex-col">
<span className="text-blue-800 font-bold">4040</span> <span>Toll free line</span></div>
</div>


<div className="flex gap-5 items-center px-10">
<img src="/images/message.svg " className="w-5 h-5"/> 

<div className="flex flex-col">
    <span className="text-blue-800 font-bold">info@rssb.rw</span> <span>Reach to us</span></div>
    </div>
</div>

</div>



<div className="flex items-center gap-5 px-10
 bg-blue-900 h-25 w-290 ml-17 mt-5 rounded-2xl text-white sticky top-0">

    <a href="#">HOME</a> 
    <a href="">SCHEMES</a> 
    <a href="">INVESTMENT</a>
    <a href="">MANAGEMENT</a>
    <a href="">ABOUT</a>
    <a href="">CAREERS</a>
    <a href="">NEWS & EVENTS</a>
</div>

</>


)

}


export default Herosection