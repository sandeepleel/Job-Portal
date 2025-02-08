import { InputHTMLAttributes } from "react";

declare interface ButtonProps extends InputHTMLAttributes<HTMLDivElement> {
  title: string;
  bgVariant?: "primary" | "secondary" | "danger" | "outline" | "success";
  textVariant?: "primary" | "default" | "secondary" | "danger" | "success";
  IconLeft?: React.ComponentType<unknown>;
  IconRight?: React.ComponentType<unknown>;
  className?: string;
}

declare interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  tintColor?: string;
  Icon?: React.ComponentType<unknown>;
  labelStyle?: string;
  inputStyle?: string;
  className?: string;
  type?: string;
  placeholder?: string;
}

declare interface TextAresProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  tintColor?: string;
  Icon?: React.ComponentType<unknown>;
  labelStyle?: string;
  inputStyle?: string;
  className?: string;
  placeholder?: string;
  rows?: number;
}
