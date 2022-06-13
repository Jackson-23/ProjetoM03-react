import RamenLista from "../../components/RamenLista/RamenLista";
import "../Home/Home.css";
import { Navbar } from "components/Navbar/Navbar";

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
