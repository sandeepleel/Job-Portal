import { TextAresProps } from "@/types/type";

const TextArea = ({
  label,
  Icon,
  labelStyle,
  inputStyle,
  placeholder,
  className,
  ...props
}: TextAresProps) => {
  return (
    <div className={"my-2 w-full text-gray-900"}>
      {label && <p className={`text-lg font-semibold mb-3 ${labelStyle}`}>{label}</p>}
      <div
        className={`flex flex-row justify-start items-center relative bg-neutral-100 rounded-xl border ${className}`}
      >
        {Icon && (
          <div className="pl-4 text-xl text-gray-400">
            <Icon />
          </div>
        )}
        <textarea
          // placeholderTextColor={"#a3a3a3"}
          className={`rounded-xl w-full  p-4 font-semibold ${inputStyle} text-left outline-primary-500`}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </div>
  );
};

export default TextArea;
