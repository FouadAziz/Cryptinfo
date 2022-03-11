import Navbar from "../components/navbar";
import { useState } from "react";

const defaultEndpoint =
  "http://api.coinlayer.com/api/live?access_key=7baee11db33d8d63aa768c1329690339";

export async function getServerSideProps() {
  const res = await fetch(defaultEndpoint);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  const [rate, setRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setRate(e.target.cInput.value);
  };

  return (
    <div className="content">
      <Navbar />

      <form onSubmit={handleSubmit}>
        <label>Currency:</label>
        <input type="input" name="cInput" className="input" />
        <input type="submit" value="Enter" className="submit" />
      </form>
      <h1>{`exchange rate is : ${data.rates[rate]}`}</h1>
    </div>
  );
}
