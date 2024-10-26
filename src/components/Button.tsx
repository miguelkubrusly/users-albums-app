import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { GoSync } from "react-icons/go";

type ExcludeFromObject<T extends any[], U> = {
  [K in keyof T]: T[K] extends U ? never : T[K];
}[number];

type Exclusive<T extends PropertyKey[], U = any> = T[number] extends infer E
  ? E extends string
    ? Record<E, U> & { [k in ExcludeFromObject<T, E>]?: never }
    : never
  : never;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<{
    outline: boolean;
    rounded: boolean;
    children: React.ReactNode;
    className: string;
    loading: boolean;
  }> &
  Partial<
    Exclusive<["primary", "secondary", "success", "warning", "danger"], boolean>
  >;

function Button({
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  children,
  className,
  loading,
  ...rest
}: ButtonProps) {
  const classes = twMerge(
    classNames(
      className,
      "flex text-sm items-center justify-center text-center px-3 py-1.5 border border-solid font-medium m-2 h-8 min-w-fit",
      {
        "border-black bg-gray-100 text-black hover:bg-gray-200":
          !primary && !secondary && !success && !warning && !danger && !outline,

        "border-black text-black bg-transparent hover:bg-gray-50 hover:text-black":
          !primary && !secondary && !success && !warning && !danger && outline,

        "rounded-full": rounded,

        "border-blue-500 bg-blue-500 text-white hover:bg-blue-600":
          primary && !outline,
        "border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white":
          primary && outline,

        "border-gray-700 bg-gray-800 text-white hover:bg-gray-900":
          secondary && !outline,
        "border-gray-700 text-gray-800 bg-transparent hover:bg-gray-800 hover:text-white":
          secondary && outline,

        "border-green-500 bg-green-500 text-white hover:bg-green-600":
          success && !outline,
        "border-green-500 text-green-500 bg-transparent hover:bg-green-500 hover:text-white":
          success && outline,

        "border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600":
          warning && !outline,
        "border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500 hover:text-white":
          warning && outline,

        "border-red-500 bg-red-500 text-white hover:bg-red-600":
          danger && !outline,
        "border-red-500 text-red-500 bg-transparent hover:bg-red-500 hover:text-white":
          danger && outline,

        "opacity-60 hover": loading,
      }
    )
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading ? <GoSync className="animate-spin" /> : children}
    </button>
  );
}

export default Button;
