
interface ButtonProps{
    type : 'button' ,
    title : string,
    icon ?: string,
    variant : 'btn_dark_green'
}

export const Button = ({type,title,icon,variant}:ButtonProps)=>{
    return(
       <button type = {type} className = {`flexCenter gap-3 rounded-full p-2 border bg-slate-300 ${variant}`}>
        <label className ="bold-16 whitespace-nowrap ">{title}</label>


       </button>
      
    )
}