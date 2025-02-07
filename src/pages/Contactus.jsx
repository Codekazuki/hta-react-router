import { useGlobalContext } from "../context";

const Contactus = () => {
  const { count, handleIncrease } = useGlobalContext();
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrease}>Increment</button>
    </div>
  );
};

export default Contactus;
