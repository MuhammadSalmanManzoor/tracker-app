
import './App.css';
import Child from './Child';
import {Transctionprovider} from './transContext'
function App() {

  return (
    <Transctionprovider>
        <Child />
    </Transctionprovider>
  );
}

export default App;
