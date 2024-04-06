import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <header className="header-container">
        <Header />
      </header>
      <main className="main-container">
        <article>
          <Outlet />
        </article>
      </main>
    </>
  );
};

export default App;
