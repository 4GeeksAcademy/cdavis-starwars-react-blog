import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Characters from '../component/people';  
import CharacterDetails from '../component/CharacterDetails';  

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/CharacterDetails/:uid" element={<CharacterDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
