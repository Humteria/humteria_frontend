import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './pages/test';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
