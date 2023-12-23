import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import js
import Navbar from './Component/navBar';
import WordPage from './Component/WordList/wordPage';
import HomePage from './Component/HomePage/homePage';
import FlashPage from './Component/FlashPage/flashPage';

import NotFound from './Page/404';

function App() {

  return (
    <div className="App">
      <Router>
        <HelmetProvider>
          <Navbar />
          <Routes>
            <Route path="/"
              element={
                <>
                  <Helmet>
                    <title>Home Page</title>
                  </Helmet>
                  <HomePage />
                </>
              }
            />
            <Route
              path="/subjects"
              element={
                <>
                  <Helmet>
                    <title>Subjects</title>
                  </Helmet>
                  <WordPage />
                </>
              } />
              <Route
              path="/flash/:section_id"
              element={
                <>
                  <Helmet>
                    <title>Subjects</title>
                  </Helmet>
                  <FlashPage />
                </>
              } />

              <Route path="*" element={<NotFound />} />
          </Routes>
        </HelmetProvider>

      </Router>
    </div>
  );
}

export default App;
