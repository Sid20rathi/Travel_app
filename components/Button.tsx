
interface ButtonProps{
    type : 'button' ,
    title : string,
    icon ?: string,
    variant : 'btn_dark_green',
    link ?: string ,
    onfun ?: ()=> void
};

export const Button = ({type,title,icon,variant,link,onfun} :ButtonProps)=>{
    return(
       <button type = {type} className = {`flexCenter gap-3 rounded-full p-2 border bg-slate-300 ${variant}`} onClick={onfun}>
        <label className ="bold-16 whitespace-nowrap ">{title}</label>


       </button>
      
    )
}
