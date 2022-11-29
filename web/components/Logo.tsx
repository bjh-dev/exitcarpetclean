import { useTheme } from "next-themes";

const Logo = () => {
  const currentTheme = useTheme();

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 635 409.17">
        <path
          fill="#1aa44a"
          d="M282.54 204.58 407 0 268.54 190.58 130.09 0l124.46 204.58-124.46 204.59 138.45-190.58L407 409.17 282.54 204.58z"
        />
        <path
          className="fill-gray-900 dark:fill-white"
          d="M0 102.29h148.46v25.07H27.02v62.11h112.25v23.68H27.02v69.36h123.53v24.37H0V102.29ZM385.96 102.29h27.99v204.58h-27.99V102.29ZM635 102.29v24.37h-68.94v180.21h-27.99v-180.2h-68.94V102.3H635Z"
        />
      </svg>
    </>
  );
};

export default Logo;
