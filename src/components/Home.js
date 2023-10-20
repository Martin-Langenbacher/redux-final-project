import { useAuth } from "./DashboardLearning";

const Home = () => {
  const {onLogin} = useAuth()
  return (
    <>
      <h2>Home (Public)</h2>

      <button type="button" onClick={onLogin}>
        Sign In
      </button>
    </>
  );
};

export default Home;
