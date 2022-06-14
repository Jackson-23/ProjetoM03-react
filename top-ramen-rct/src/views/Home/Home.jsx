import RamenLista from "../../components/RamenLista/RamenLista.jsx";
import "../Home/Home.css";
import { Navbar } from "components/Navbar/Navbar.jsx";

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <Navbar />
      </div>
      <div className="Home__container">
        
        <RamenLista />
      </div>
    </div>
  );
}

export default Home;
