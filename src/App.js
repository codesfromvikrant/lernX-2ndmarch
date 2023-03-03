import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// Components
import Jobs from './components/Jobs'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Jobs />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App;