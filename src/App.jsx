import {  Routes,Link,  Route , useNavigate, useLocation } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Solutions from "./components/Solutions"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useRef, useState} from "react"

function App() {
  
  const [currentUrl, setCurrentUrl] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const urlRef = useRef();
  const ref = useRef();

  const options = {
    threshold: 0.10,
    root: null
  };
  
  useEffect(() => {

    setCurrentUrl(location.pathname);
    
    urlRef.current = location.pathname;
  }, [location.pathname]);

  function onIntersection(entries){
    const firstEntry = entries[0];
    const url = urlRef.current;

    if(firstEntry.isIntersecting && url === '/'){
      navigate('/about')
      
    }else if(firstEntry.isIntersecting && url === '/about'){
      navigate('/about/solutions')
      
    }else if(firstEntry.isIntersecting && url === '/about/solutions'){
      navigate('/about/solutions/contact');
      
    };
  };

  
  useEffect( () => {
    const observer = new IntersectionObserver(onIntersection, options)
    if(observer && ref.current){
      observer.observe(ref.current)

      console.log(ref.current);
      
      return () => {
        const url = urlRef.current;
        if(url === '/about/solutions/contact'){
          observer.disconnect();
        }
      }
    }
  }, [currentUrl]);

  return (
          <Routes>
          <Route
            path="/*"
            element={
              <div>
                <Home />
                <Routes>
                <Route 
              path="about/*"
              element={
                <div id="about">
                  <About/>
                  <Routes>
                    <Route path="solutions/*" element=
                    {
                    <div id="solutions">
                      <Solutions/>
                      <Routes>
                        <Route path="contact" element={<Contact/>} />
                      </Routes>
                    </div>
                    
                    } />
                  </Routes>
                </div>
              }
            />
                </Routes>
                <Footer ref={ref} />
              </div>
            }
          />
        </Routes>
      
  )
}

export default App
