import { useState } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './Pages/Main';



function App() {
  const [data, setData] = useState(0)
  const onShop = () => {
    setData(0)
  }

  return (
    <div className="App">
      <Header setData={onShop}/>
      <Main data={data} setData={setData}/>
    </div>
  );
}

export default App;
