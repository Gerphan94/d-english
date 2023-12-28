import './App.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import js
import Navbar from './Component/navBar';
import SubjectPage from './Component/SubjectPage/SubjectPage';
import HomePage from './Component/HomePage/homePage';
import FlashCards from './Component/FlashPage/FlashCards';
import ManagerPage from './Component/WordManager/ManagerPage';
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
              path="/manager"
              element={
                <>
                  <Helmet>
                    <title>Manager Page</title>
                  </Helmet>
                  <ManagerPage />
                </>
              } />

            <Route
              path="/subjects"
              element={
                <>
                  <Helmet>
                    <title>Subjects</title>
                  </Helmet>
                  <SubjectPage />
                </>
              } />
            <Route
              path="/flash/:section_id"
              element={
                <>
                  <Helmet>
                    <title>Flash Card</title>
                  </Helmet>
                  <FlashCards />
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
