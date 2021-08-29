const Input = ({disabled, placeholder, value, onChange}) => {
  const handleChange = (event) => onChange(event.target.value);

  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
