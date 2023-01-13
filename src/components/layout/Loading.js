import style from "./Loading.module.css";
import RingLoader from "react-spinners/RingLoader";

function Loading(props) {
  return (
    <>
      <RingLoader size={60} color={"#4F5128"} loading={props.loading}/>
      <div className={style.text}>Loading ...</div>
    </>
  );
}

export default Loading;
