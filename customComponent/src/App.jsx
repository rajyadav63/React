import UserCard from "./components/UserCard.jsx";
import "./App.css";

import RK from "./assets/rk.jpg";
import Messi from "./assets/messiXucl.jpg";
import Pedri from "./assets/pedri.jpg";

function App() {
  return (
    <div className="container">
      <UserCard name="RK" desc="Description" image={RK} />
      <UserCard name="Messi" desc="Description" image={Messi} />
      <UserCard name="Pedri" desc="Description" image={Pedri} />
    </div>
  );
}

export default App;
