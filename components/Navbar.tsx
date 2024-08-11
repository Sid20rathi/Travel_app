import Link from "next/link"
import Image from 'next/image'
import { NAV_LINKS } from "@/constants"
import { Button } from "./Button"

export const NAVBAR = ()=>{
    return(
      <nav className =" flexBetween max-container padding-container relative z-30 py-5">
        <Link href ="/">
          <Image src ="/logo.svg" alt="logo" width={130} height={130} />
        </Link>
       <ul className =" hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link)=>(
            <Link href ={link.href} key={link.key}
            className ="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-2xl">
                {link.label}

            </Link>
        ))}

       </ul>

       <div className ="hidden  lg:flexCenter pb-5">
        <Link href="Trips">
        <Button 
        type = 'button' 
        title ="Trip"
        icon ="/user.svg"
        variant ="btn_dark_green"
        
        
        
        /></Link>
       </div>
       <Link href={"/Trips"}> <Image 
        src = "menu.svg"
        alt = "menu"
        width ={32}
        height = {32}
        className="inline-block cursor-pointer lg:hidden"></Image></Link>
 
      
      </nav>
    )
}