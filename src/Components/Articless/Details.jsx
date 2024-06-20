import { NewsAlgoritm } from "./NewsAlgoritm/NewsAlgoritm.jsx";

function Details({ data }) {
  return (
    <div className="max-w-7xl mx-auto mt-4 border">
      <NewsAlgoritm data={data} />
    </div>
  );
}

export { Details };
