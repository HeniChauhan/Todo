import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoComponent from './Component/TodoComponent';
import PDFComponent from './Component/PDFComponent';

import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Blog from './Component/blog/Blog';
import SingleBlog from './Component/blog/SingleBlog';

function App() {
  return (
    <div className="App">
     
       
       {/* <PDFComponent /> */}
       <BrowserRouter>
          <Routes>
            <Route path="/todo" element={<TodoComponent />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleBlog />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
