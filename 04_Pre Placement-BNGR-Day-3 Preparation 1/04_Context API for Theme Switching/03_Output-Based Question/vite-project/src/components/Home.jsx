import { useTheme } from "./context/ContextProvider";


const Home = () => {
  const { toggle, darkMode } = useTheme();

  return (
    <div>
      <label>Toggle theme</label>
      <input
        type="checkbox"
        onChange={toggle}
        checked={darkMode}
        className="inputBox"
      />
      <h1>My name is Sourav Roy</h1>
      <h4> I am a Full stack developer</h4>
    </div>
  );
};

export default Home;
