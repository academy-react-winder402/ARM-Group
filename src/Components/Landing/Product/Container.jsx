import { Details } from "./Details.jsx";
import { Header } from "./Header.jsx";

function Product() {
  return (
    <div className="cotainer border-black md:w-[1300px] md:h-[458px] m-auto md:mt-[100px] text-center">
      <Header />
      <Details />
    </div>
  );
}

export { Product };
