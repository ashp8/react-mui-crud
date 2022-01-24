import { createTheme, CssBaseline, makeStyles } from '@material-ui/core';
import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from '@material-ui/styles';
// import  Users  from '../components/pages/Users';
import Navbar from '../components/Navbar';
import { Routes, Route } from 'react-router';
// import Products from '../components/pages/Products';

const theme = createTheme({
  pallete: {
    primary: {
      main: '#333996',
      light:'#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324f25'
    },
    background: {
      default: '#f4f4f4'
    }
  },
  override: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      }
    }
  },
  props: {
  }
});


const useStyles = makeStyles({
  appMain: {
    width: '100%',
    height:'100%',
  }

});

const Users = lazy(()=>import('../components/pages/Users'))
const Products = lazy(()=>import('../components/pages/Products'))

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
            <Route exact path="/" element={<div>this is home route</div>}></Route>
            <Route exact path="/users" element={
               <div className={classes.appMain}>
                 <Suspense fallback={<div>Loading...</div>}>
                  <Users/>
                </Suspense>
             </div>
            }></Route>
            <Route exact path="/products" element={
              <Suspense fallback={<div>Loading...</div>}>
              <Products />
              </Suspense>
            }></Route>
      </Routes>
     
      <CssBaseline/>
    </ThemeProvider>
  );
}

export default App;