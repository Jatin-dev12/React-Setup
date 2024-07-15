import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

// Import you pages here //
import Home from './componets/Home';
// Import Browesrouter for navigate from one page to other page //
import { BrowserRouter , Routes , Route } from 'react-router-dom';
// Import layout that will help to show header and footer in all pages //
import Layout from './Layout';

function App() {
  return (
    

    <BrowserRouter >

      <Routes>

        {/* This / Path will route pages  */}

        <Route path="/" element={<Layout />}>

        {/* This Route will make home page as a index page */}

          <Route index element={<Home/>} />

          {/* Other pages link to navigate with formate that is below */}

          {/* <Route path="services" element={<Services />} /> */}
        
        </Route>
      
      </Routes>
    </BrowserRouter>

  );
}

export default App;