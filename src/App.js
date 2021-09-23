import './assets/css/App.css';
import Router from './Router';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas} from '@fortawesome/free-solid-svg-icons';
library.add(fab, fas);
function App() {
  return (
    <div className="App">
    
      <Router />
     
    </div>
  );
}

export default App;
