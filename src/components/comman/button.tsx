import { ButtonProps } from "@/types/type";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "secondary":
      return "bg-gray-500";
    case "danger":
      return "bg-red-500";
    case "success":
      return "bg-success-500";
    case "outline":
      return "bg-transparent border-neutral-300 border-[0.5px]";
    default:
      return "bg-primary-500";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "danger":
      return "text-red-100";
    case "success":
      return "text-green-100";
    default:
      return "text-white";
  }
};

const CustomButton = ({
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={`w-full cursor-pointer rounded-xl py-3 px-10 flex flex-row justify-center items-center ${getBgVariantStyle(
        bgVariant
      )} ${className}`}
      {...props}
    >
      {IconLeft && (
        <div className={`pr-3 text-xl ${getTextVariantStyle(textVariant)}`}>
          <IconLeft />
        </div>
      )}
      <p className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>{title}</p>
      {IconRight && (
        <div className={`pl-3 text-xl ${getTextVariantStyle(textVariant)}`}>
          <IconRight />
        </div>
      )}
    </div>
  );
};

export default CustomButton;
