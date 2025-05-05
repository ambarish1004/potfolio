import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Loader from './components/Loader';

import useLenis from './hooks/useLenis';
import useKeyboardControls from './hooks/useKeyboardControls';

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useLenis();
  useKeyboardControls();

  return (
    <>
      <Loader onComplete={() => setLoaded(true)} />
      {loaded && (
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      )}
    </>
  );
};

export default App;
