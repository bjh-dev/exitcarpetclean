import Counter from "@/components/Counter";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="container">
        <div className="flex flex-col space-y-4">
          <Counter />
          <Counter />
          <Counter />
          <div>
            <h2>Total Count = </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
