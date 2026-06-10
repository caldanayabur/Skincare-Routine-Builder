import './App.css';
import CardList from "./components/CardList";

const App = () => {
  return (
    <div className="App">
      <h1>Skincare Routine Builder</h1>
      <p>Explore skincare steps and popular products by skin type</p>    
      <CardList />
    </div>
  );
};

export default App;