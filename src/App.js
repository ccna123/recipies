import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Tag } from './pages/Tag';
import { RecipiesPage } from './pages/RecipiesPage';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App lg:px-40 py-10 w-full">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/tags' element={<Tag/>} />
          <Route path='/recipies/:id' element={<RecipiesPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
