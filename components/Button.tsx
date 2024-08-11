
import Image from "next/image"

 
interface CampProps{
  backgroundImage:string
  title : string
  
}



 


const Campsite =({backgroundImage,title}:CampProps)=>{
  return(
    <div className="size-20">
         <div className = {` object-cover   h-full w-11/12 bg-cover  ${backgroundImage}  bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl absolute overflow-clip sm:rounded-5xl md:rounded-5xl
    ` } >
      <div className = "flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className = "flexCenter gap-4">
          <div className = "rounded-full bg-green-50 p-4">
            <Image
            src ="/folded-map.svg"
            alt ="map"
            width={28}
            height={28}
            />
          </div>
          <div className ="flex flex-col gap1">
            <h4 className = "bold-18 text-white">{title}</h4>

          </div>

        </div>  

      </div>
    </div>
    </div>
 


  )  
}

const Camp = () => {
  return (
    <section className = "h-full  2xl:max-conatiner relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20"> 
     <div className=" flex  flex-row gap-y-5 h-[340px] w-full items-start justify-start sm:h-[200px] lg:h-[400px] xl:h-[640px] sm:rounded-md ">
      <Campsite
        backgroundImage = "bg-bg-img-1"
        title ="Kedarkantha camp " />

        


                                                                    
     </div>
     <div className =" flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 xl:pt-80 xl:pr-7">
      <div className = " bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative overflow-hiddden rounded-3xl">
       <h2 className = "regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
        <strong>
        Feeling Lost </strong>And Not Knowing The Way?
       </h2>
       <p className = "regular-14 xl:regular-16 mt-5 text-whitw">
       Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
       </p>
       <Image 
       src ="/quote.svg"
       alt="camp-2"
       width ={186}
       height = {219}
       className="camp-quote"/>
      </div>

     </div>
 

    </section>




  )
   

}

export default Camp
