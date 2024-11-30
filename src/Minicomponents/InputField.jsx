export default function Input({
  label,
  type = 'text',
  value,
  onChange = ()=>{},
  onFocus = ()=>{},
  onBlur = ()=>{},
  placeholder,
  name,
  id,
  required = false,
  className = "",
  error = "",
  tooltip = "",
  iconLeft =null,
  iconRight=null,
  httpInp='',
  variant="default",
  width='100%',
  height='40px',
  ...props
}) {

    const handleChange = (event)=>{
        if(onChange){
            onChange(event);
        }
    }

    const handleFocus = (event)=>{
        if(onFocus){
            onFocus(event);
        }
    }

    const handleBlur = (event)=>{
        if(onBlur){
            onBlur(event);
        }
    }

    const variantStyles = {
        default:{
            border:"1px solid gray",
            borderRadius:"4px",
            backgroundColor:"white",
        },
        outline:{
            border:"2px solid black",
            borderRadius:"4px",
            backgroundColor:"white",
        },
        filled:{
            border:"1px solid transparent",
            borderRadius:"4px",
            backgroundColor:"lightBlue",
        },
        rounded:{
            border:"1px solid gray",
            borderRadius:"20px",
            backgroundColor:"white",
        }
        
    }

  return (
    <div className={className}>
      {label && <label htmlFor={id || name}>{label}</label>}

    <div style={{position: "relative", width: "100%"}}>
        {tooltip && (
            <span className="tooltip"
            style={{
                position:"absolute",
                right:"10px",
                top:"50%",
                transform:"translateY(-50%)",
                cursor:"pointer",
            }} title={tooltip}>
                i
                </span>
        )}

        {httpInp && (
            <span style={{
                position:"absolute",
                left:"10px",
                fontSize:"14px",
                color:"black",
            }}
          
            >
                  {httpInp}
            </span>
        )}

        {iconLeft && (
            <span style={{
                position:"absolute",
                left:httpInp ? "60px" : "10px",
                display:"flex",
                alignItems:"center",
            }}
            
            >{iconLeft}</span>
        )}

      <input
        id={id || name}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        name={name}
        required={required}
        className={className}
        height={height}
        width={width}
        style={{
            ...variantStyles[variant]
        }}
        {...props}
      />
    </div>

    {iconRight && (
        <span style={{
            position:"absolute",
            right:"10px",
            display:"flex",
            alignItems:"center",
        }}>
            {iconRight}
        </span>
    )}

    {error && (
        <span
        className="error-message"
        style={{
          display:"block",
          color:"red",
          fontSize:"12px",
          marginTop:"4px",
        }}
      >
        {error}
      </span>
    )}
    </div>
  );
}
