import Hello from "../../components/hello";

const Home = () => {
  console.log("What type of component am I?");
  return (
    <main>
      <div className="text-6xl underline">
        Welcome to Next 16
        <Hello />
      </div>
    </main>
  );
};

export default Home;
