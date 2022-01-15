import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Overview from './pages/Overview';
import { Reports,ReportsOne,ReportsTwo,ReportsThree } from './pages/Reports';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='overview'  element = {<Overview />} />
        <Route path='reports'  element = {<Reports />} />
        <Route path='reports/reports1'  element = {<ReportsOne />} />
        <Route path='reports/reports2'  element = {<ReportsTwo />} />
        <Route path='reports/reports3'  element = {<ReportsThree />} />
      </Routes>
    </Router>
  );
}

export default App;
