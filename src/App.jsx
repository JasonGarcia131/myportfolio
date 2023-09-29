import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';

const App = () => {


  return (
    <>
      <Nav />
      <div className='h-[100vh] flex flex-col justify-center items-center'>
        <Hero />
      </div>
    </>
  )
}

export default App;
