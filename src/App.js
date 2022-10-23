import Coffes from "./components/Home/Coffes/Coffes";
import Footer from "./components/Home/Footer/Footer";
import Giveaway from "./components/Home/Giveaway/Giveaway";
import Header from "./components/Home/Header/Header";
import Trip from "./components/Home/Trip/Trip";

function App() {
  return (
    <div>
     <Header />
     <Giveaway />
     <Trip />
     <Coffes />
     <Footer />
    </div>
  );
}

export default App;
