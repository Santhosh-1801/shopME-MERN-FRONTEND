import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import {Toaster} from 'react-hot-toast'
import "./App.css"
import {BrowserRouter as Router,Routes} from "react-router-dom"
import useUserRoutes from "./components/route/userRoutes";
import useAdminRoutes from "./components/route/adminRoutes"

function App() {
  const userRoutes=useUserRoutes()
  const adminRoutes=useAdminRoutes()
  return (
    <Router>
      <div className="App">
      <Toaster position="top-center"/>
      <Header/>
      <div className="container">
        <Routes>
            {userRoutes}
            {adminRoutes}
        </Routes>
      </div>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
