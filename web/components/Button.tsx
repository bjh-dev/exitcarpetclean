import { ButtonProps } from "@/lib/types";
import Link from "next/link";

const Button = (props) => {
  const { href, label, size }: ButtonProps = props;
  let sizeClasses;
  switch (size) {
    case "sm":
      sizeClasses = `text-sm px-4 py-2`;
      break;
    case "md":
      sizeClasses = `text-base px-6 py-3`;
      break;
    case "lg":
      sizeClasses = `text-xl px-12 py-3`;
      break;
    default:
      sizeClasses = `text-base px-6 py-3`;
      break;
  }
  return (
    <div className="flex-none font-futura-bold">
      <Link href={href} passHref>
        <a
          href=""
          className={`rounded-full bg-green-600 ${sizeClasses} font-bold text-gray-50`}
        >
          {label}
        </a>
      </Link>
    </div>
  );
};

export default Button;
