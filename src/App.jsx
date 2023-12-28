import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HelloPage from './pages/HelloPage/HelloPage'
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrPage from "./pages/RegistrPage/RegistrPage.jsx";
import SubjectMapPage from './pages/SubjectsMapPage/SubjectMapPage.jsx';
import TestsPage from './pages/TestsPage/TestsPage.jsx';
import TestPage from './pages/TestPage/TestPage.jsx';
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx';
import CreateTestPage from './pages/CreateTestPage/CreateTestPage.jsx';

function App() {
    return(
      <>
        <Routes>  
          <Route path="/" element={<HelloPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/registr" element={<RegistrPage/>}/>
          <Route path="/subject_map" element={<SubjectMapPage/>}/>
          <Route path="/subject_map/tests" element={<TestsPage/>}></Route>
          <Route path="/subject_map/tests/test" element={<TestPage/>}></Route>
          <Route path="/profile" element={<ProfilePage/>}></Route>
          <Route path="/create_test" element={<CreateTestPage/>}></Route>
        </Routes>
      </>
    )
}

export default App
