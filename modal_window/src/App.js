import './App.css';

import { ModalProvider } from "./contexts";
import { Controls } from './components';

function App() {

  return (
    
    <ModalProvider>
      <div className="App">
       <div className="container">
        <Controls />
      </div>
      </div>
    </ModalProvider>
  );
}

export default App;
