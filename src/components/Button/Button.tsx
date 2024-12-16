import React from "react";
type Variant = "primary" | "secondary" | "danger" | "outline";

const Button: React.FC<{
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  className = "",
  ...rest
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium focus:outline-none transition";

  const variantStyles: Record<Variant, string> = {
    primary:
      "bg-[#007AFF] text-white hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
    secondary:
      "bg-[#8E8E93] text-white hover:bg-gray-600 focus:ring-2 focus:ring-gray-400",
    danger:
      "bg-[#FF3B30] text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400",
    outline:
      "bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100",
  };

  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const combinedStyles = [
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    (disabled || isLoading) && disabledStyles,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedStyles}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? (
        <span className="loader border-t-transparent border-white border-2 border-solid rounded-full w-4 h-4 mr-2 animate-spin"></span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
