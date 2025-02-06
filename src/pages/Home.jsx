import { useGlobalContext } from "../context";

const Home = () => {
  const { name } = useGlobalContext();
  return <div>{name}</div>;
};

export default Home;
