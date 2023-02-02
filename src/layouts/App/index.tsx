import React from 'react';
import loadable from '@loadable/component';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogIn = loadable(() => import('@pages/Login'));
const Workspace = loadable(() => import('../Workspace'));

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navigate to='/workspace/main1' replace/>} />
        <Route path='/workspace/*' element={<Workspace/>} />
        <Route path="/login/*" element={<LogIn/>} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
