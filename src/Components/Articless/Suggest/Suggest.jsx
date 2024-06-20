import { Header } from "./Header.jsx";
import { SuggestDetail } from "./SuggestDetail.jsx";
function Suggest({ title, className, data }) {
  return (
    <div className={className}>
      <Header title={title} />
      <SuggestDetail />
    </div>
  );
}

export { Suggest };
