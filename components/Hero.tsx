import Image from "next/image"
import { Button } from "./Button"



export const Hero =()=>{
    return(
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />
  
      
      



        <div className = "relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image src= "/camp.svg" 
        alt="camp" width = {50}
        height ={50}
        className ="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] " />
        <h1 className = "bold-52 lg:bold-88 ">
        Kedarkantha Trek Camp Area


        </h1>
        <p className ="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
        The Kedarkantha trek is a popular winter trek in the Indian Himalayas, renowned for its breathtaking views, snow-covered trails, and the panoramic vistas from the Kedarkantha summit. The trek takes you through enchanting pine forests, remote villages, and open meadows, culminating in a stunning 360-degree view of the snow-capped Himalayan peaks.


        </p>
        < div className="flex w-full gap-3 pt-5 sm:flex-row ">
        <Button  type = 'button' title =" download App " variant = "btn_dark_green" />
        
        </div> 


        </div>

        <div className = "relative flex flex-1 items-start ">
            <div className ="relative z-20  flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                <div className = " flex flex-col">
                    <div className = " flexBetween">
                        <p className = "regular-16 text-gray-20">location</p>
                        <Image src ="/close.svg" alt="close " width={24} height = {24}/>
                
                         </div>
                         <p className="bold-20 text-white">Gaurikund</p>
                         </div>
                         <div className = " flexBetween">
                            <div className = " flex flex-col ">
                                <p className = " regular-16 block text-gray-20 ">Distance</p>
                                <p className ="bold-20 text-white">16 km</p>

                            </div>
                            <div className = " flex flex-col ">
                                <p className = " regular-16 block text-gray-20 ">Altitude</p>
                                <p className ="bold-20 text-white">12,500 feet</p>

                            </div>
                        

                         </div>

                </div>


            </div>

            
        
      </section>
    )
} 