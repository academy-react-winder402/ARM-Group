import Titles from "./Titles.jsx";
import ImagesSection from "./ImagesSection";

export const DetailsSection1 = () => {
  return (
    <div className="flex justify-center gap-[20px] flex-nowrap flex-row">
      <Titles />
      <ImagesSection />
    </div>
  );
};
