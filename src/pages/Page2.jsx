import { Link } from "react-router-dom";

export const Page2 = () => {
  return (
    <div>
      <h1>Page2です</h1>
      <Link to="/page2/500">URL Parameter</Link>
      <br />
      <Link to="/page2/500?name=hogehoge&sumple=hogeee">Query Parameter</Link>
    </div>
  );
};
