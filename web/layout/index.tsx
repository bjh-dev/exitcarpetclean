import Footer from "@/layout/Footer";
import Header from "@/layout/Header";

const Layout = (props) => {
  return (
    <div className="font-sans relative bg-gray-50 font-futura font-normal text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-50">
      <div className="flex min-h-screen flex-col overflow-x-hidden ">
        <Header {...props} />
        <main className="mb-auto">{props.children}</main>
        <Footer {...props} />
      </div>
    </div>
  );
};

export default Layout;
