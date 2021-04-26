import logo from './logo.svg';
import React,{Fragment, useEffect,useState} from "react";
import './App.css';
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from "./Api/Api";
import { Grid, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BorderColorSharp } from '@material-ui/icons';

  const theme = createMuiTheme({
    typography: {
      "fontFamily": `"nunito", "Roboto", "Helvetica", "Arial", sans-serif`,
      "fontSize": 14,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500
     },
    palette: {
      primary: {
        light: '#ff7961',
        main: '#3f50b5',
        dark: '#f44336',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#3f50b5',
        contrastText: '#fff',
      },
    },
  
});


function App() {

  const [matches,setMatches]=useState([]);
  useEffect(()=>{
    getMatches()
      .then((data)=> setMatches(data.matches))
      .catch()
  },[]);

 return (
  <ThemeProvider theme={theme}>
  <div className="App">
    <div className="App">
      <Navbar/>
      {/* <Typography variant="h3" style={{marginTop:20,fontFamily:"popins",fontStyle:"italic",fontWeight:"bold",color:"#312fab"}}>Welcome to CricLive!</Typography> */}
      <Grid container> 
        <Grid sm="2"></Grid>
          <Grid sm="8">
          { matches.map((match)=> (
          <Fragment>
            {
              match.type ==="" ? ( 
              <MyCard key={match.unique_id} match={match} />)
              : ""
            }
          </Fragment>
      ))}
        
          </Grid>
      </Grid>
      
      
    </div>
    </div>
      </ThemeProvider>
  );
}

export default App;
