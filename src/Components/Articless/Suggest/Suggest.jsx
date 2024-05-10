import { Header } from "./Header.jsx";
import { Detail } from "./Detail.jsx";
function Suggest({ title }) {
  return (
    <div className="w-[350px] h-[590px] shadow-3xl rounded-[12px] p-4">
      <Header title={title} />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
      <Detail />
    </div>
  );
}

export { Suggest };
