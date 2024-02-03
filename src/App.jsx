import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Serves from "./Serves/Serves";

const App = () => {
  return (
        <div className='w-[100vw] h-[100vh] bg-zinc-900'>
      <BrowserRouter>
          <div className="navbar w-[100vw] h-[100px] bg-orange-600">
            <ul className='h-[100%] flex justify-around items-center text-[30px]'>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li> <Link to="/about">About</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li> <Link to="/serves">Serves</Link></li>
            </ul>
          </div>
        <Routes>
          <Route path="/" elements={<Home />} />
          <Route path="/about" elements={<About />} />
          <Route path="/portfolio" elements={<Portfolio />} />
          <Route path="/serves" elements={<Serves />} />
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App