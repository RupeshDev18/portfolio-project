import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Particles from 'react-tsparticles';
import AboutMe from './Components/AboutMe';
function App() {
  return (
    <>
    <Particles
      className='particles-canvas'
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"circle",
            stroke:{
              color:"f9ab00"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <AboutMe/>
    </>
  );
}

export default App;
