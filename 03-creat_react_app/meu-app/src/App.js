import './App.css';
import Header from './Header';
import CounterFunction from './CounterFunction';

function App() {

  let time = 0;

  // setInterval(() => {
  //   time++;
  //   console.log(time)
  // }, 1000)

  return (
    <div>
      <Header name="ProgBr" links={["Sobre", "Comprar", "Contato", "Login"]}></Header>
      <CounterFunction count={5}></CounterFunction>
    </div>
  );
}

export default App;
