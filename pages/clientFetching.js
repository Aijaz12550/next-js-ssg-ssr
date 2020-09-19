import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";

const ClientFetching = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setData(data)
      });
  }, []);

  console.log(">>")

  return <div className={styles.container}>
      <img src={"vercel.svg"} />
      <a>
          lkjhkhk
      </a>
      {
          data?.length?JSON.stringify(data):"Loading ..."
      }
  </div>;
};
export default ClientFetching;
