import Button from "@/components/Button";
import Logo from "@/components/Logo";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = (props) => {
  return (
    <header className="py-6">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-20">
            <Link href="/" passHref>
              <a href="">
                <h1 className="sr-only">Exit Carpet Clean</h1>
                <Logo />
              </a>
            </Link>
          </div>
          <nav className="space-x-4 text-sm">
            {/* <Link href="about">
              <a className="font-futura-bold">About</a>
            </Link>
            <Link href="carpet-cleaning">
              <a className="font-futura-bold">Carpet Cleaning</a>
            </Link>
            <Link href="pricing">
              <a className="font-futura-bold">Pricing</a>
            </Link>
            <Link href="guarantee">
              <a className="font-futura-bold">100% Guarantee</a>
            </Link> */}
          </nav>
          <div>
            <Button label="Schedule your clean" href="/schedule" size="sm" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
