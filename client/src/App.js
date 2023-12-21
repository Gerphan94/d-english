import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import js
import Navbar from './Component/navBar';
import WordPage from './Component/WordList/wordPage';
import HomePage from './Component/HomePage/homePage';

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
              path="/words"
              element={
                <>
                  <Helmet>
                    <title>Words</title>
                  </Helmet>
                  <WordPage />
                </>
              } />
          </Routes>
        </HelmetProvider>

      </Router>
    </div>
  );
}

export default App;
