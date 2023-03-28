import React from 'react';
import Nav_page from './component/Nav_page';
import Home from './component/Home';
import Footer from './component/Footer'
import logo from './logo.svg';
import ProjectPage from './component/ProjectPage';
import './App.css';
import ErrorBoundary from './component/ErrorBoundary';
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, createContext } from "react";
import { projects } from './component/ListProjects';
// interface AppContextType {
//   props: any;
//   setProps: (props: any) => void;
// }
// const AppContext = createContext<AppContextType>({
//   props:[],
//   setProps:()=>{},
//   });

function App() {
  // const [props, setProps] = useState([]);
  // const appContextValue = {
  //   props,
  //   setProps,
  // };
  return (
    <>
    {/* <AppContext.Provider value={appContextValue}> */}
    <Nav_page/>
    <ErrorBoundary fallback={<div>Something went wrong!</div>}>
    <Routes>
      <Route path="/" element={<Home/>} />
      {projects.map(projects=> (
        <Route key={projects.id} path={`/${projects.url}`} element={<ProjectPage {...projects} />} />
      ))}
    </Routes>
    </ErrorBoundary>
    <Footer/>
    {/* </AppContext.Provider> */}
    
    
    
    
    
    </>
  );
}

export default App;
