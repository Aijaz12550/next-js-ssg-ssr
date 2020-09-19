import styles from "../styles/Home.module.css";

const Todos = (props) => {
  console.log("props", props);
  return <div className={styles.container}>      <img src={"vercel.svg"} />
   {JSON.stringify(props)}</div>;
};
export default Todos;

export async function getStaticProps(context) {
  let data = await fetch("https://jsonplaceholder.typicode.com/photos");
  let res = await data.json();
  return {
    props: {
      res,
    },
  };
}
