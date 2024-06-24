import { Button } from "@/components/Button"
import Image from 'next/image'
import Link from 'next/link'




export default function Trip (){
    return(
        <div className = "flexCenter h-screen w-full bg-[url('/pattern.png')] ">
            
            <div className = " border-zinc-800  bg-white border-2 h-5/6 w-5/6 drop-shadow-5xl flex flex-row flexCenter rounded-2xl" >
            <div className = " h-full w-full flexCenter  ">
                <div className =" flex flex-col  ">
               
                    <div className ="font-bold text-3xl  animate-bounce py-5 pl-4">
                      LET'S PLAN A TRIP TOGETHER
                    </div>
                    <div className = "m-3  ">
                        <Inputs title = "Your Name"/>
                    </div>
                    <div className = "m-3  ">
                        <Inputs title = "Your Email"/>
                    </div>
                    <div className = "m-3  ">
                        <Inputs title = "Your Number"/>
                    </div>
                    <div className = "flex flex-row pl-4 pr-4">
                        <div className="p-2">
                            <Inputs title = "Destination"/>
                        </div>
                        <div className = "p-2 ">
                            <Inputs title = "Travel Date"/>
                        </div>

                    </div>
                    <div className="flex justify-center pt-8">
                        <Link href="/">
                        <Button title ="plan my trip" type  = 'button' variant = "btn_dark_green"  />
                       
                        </Link>
                       

                    </div>

                </div>
               

            </div>
            <div className= " hidden lg:block bg-blue-400 h-full w-full rounded-r-2xl">
                < img src = "/rename.jpg" alt ="page" className="object-cover h-full rounded-r-2xl"/>
            

            </div>
            
            
            </div>
            

            
      
        </div>
    )
}

interface Inputspro{
    title:string
}



const Inputs =({title}:Inputspro)=>{
    return(
        <div className="relative w-full min-w-[200px] h-11">
    <input
      className ="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer text-blue-gray-700 outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 placeholder-shown:border placeholder-shown:border-blue-black-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 border-t-transparent focus:border-t-transparent border-blue-gray-200 focus:border-gray-900"
      placeholder=" " /><label
      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[4.1] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">{title}
    </label>
  </div>
    )
}

function Alerthu(){
    alert("You will be contacted soon .")
}