export default function Input({
  label,
  type,
  value,
  onChange,
  placeholder,
  name,
  id,
  required = false,
  className = "",
  ...props
}) {
  return (
    <div className={className}>
      {label && <label>{label}</label>}
      <input
        id={id || name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
        required={required}
        className={className}
        {...props}
      />
    </div>
  );
}
