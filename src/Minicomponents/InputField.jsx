export default function Input({
  label,
  type,
  value,
  onChange = ()=>{},
  placeholder,
  name,
  id,
  required = false,
  className = "",
  width='100%',
  height='40px',
  ...props
}) {

    const handleChange = (event)=>{
        if(onchange){
            onChange(event);
        }
    }
    
  return (
    <div className={className}>
      {label && <label htmlFor={id || name}>{label}</label>}

      <input
        id={id || name}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        name={name}
        required={required}
        className={className}
        height={height}
        width={width}
        {...props}
      />
    </div>
  );
}
