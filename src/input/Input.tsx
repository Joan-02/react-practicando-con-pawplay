import "./input.css";

interface InputProps {
  label: string;
  placeholder: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Permite pasar clases adicionales
  disabled?: boolean;
}

export const Input = (props: InputProps) => {
  const { label, placeholder, name, value, onChange, className, disabled } = props;


  return (
    <div >  
      <label htmlFor={name}>{label}</label>
      <input 
        id={name}
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={`input ${className || ''}`}
        disabled={disabled}
      />
    </div>
  );
};
