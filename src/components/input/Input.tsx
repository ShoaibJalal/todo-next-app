import { inputProps } from "@/types";

const Input = ({ name, type, placeholder, value }: inputProps) => {
  return (
    <>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className='block w-full p-2.5 mx-1 border rounded-lg text-base bg-gray-700 border-rose-600 placeholder-gray-400 text-white'
      />
    </>
  );
};

export default Input;