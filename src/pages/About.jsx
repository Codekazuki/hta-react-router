import { useGlobalContext } from "../context";

const About = () => {
  const { name, changeName } = useGlobalContext();
  return (
    <div>
      <p>{name}</p>
      <button onClick={changeName}>hello</button>
    </div>
  );
};

export default About;
