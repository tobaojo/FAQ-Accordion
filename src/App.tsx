import './App.css';

import Card from './components/Card';

function App() {
  return (
    <div className="flex items-center justify-center -z-10 bg-[url('images/background-pattern-mobile.svg')] md:bg-[url('images/background-pattern-desktop.svg')] bg-no-repeat bg-cover bg-center min-h-[20rem]">
      <Card />
    </div>
  );
}

export default App;
