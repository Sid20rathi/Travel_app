import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Getapp from "@/components/Getapp";
import Guide from "@/components/Guide";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import { NAVBAR } from "@/components/Navbar";

export default function Home() {
  return(
    <>
     <NAVBAR/>
    <Hero/>
    <Camp/>
    <Guide/>
 
    <Features/>
    <Getapp/>    
    </>
    
    

    
  )
}