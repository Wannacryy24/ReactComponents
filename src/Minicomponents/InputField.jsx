export function Input({label , type , value , onChange , placeholder}){
    return(
        <>
        {label && <label>{label}</label>}
        <input 
         type={type}
         value={value}
         onChange={onChange}
         placeholder={placeholder}
        />
        </>
    )
}