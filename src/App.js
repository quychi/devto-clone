import "./App.scss";
import Navigation from "./components/Navigation";
import LeftSidebar from "./components/LeftSidebar";
import Content from "./components/Content";
import RightSidebar from "./components/RightSidebar";

function App() {
  return (
    <>
      <Navigation />

      <main className="main-container">
        <LeftSidebar />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
}

export default App;
