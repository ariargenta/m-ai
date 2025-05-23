import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import axios from "axios";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.tsx";
import { Toaster } from "react-hot-toast";

import {
  createTheme,
  ThemeProvider
} from '@mui/material'

axios.defaults.baseURL = "http://localhost:5000/api/v1";
axios.defaults.withCredentials = true;


const theme = createTheme( {

  typography: {

    fontFamily: "Lato, serif",
    allVariants: { color: "white" },
  },
} );

ReactDOM.createRoot( document.getElementById( 'root' )! ).render(
  
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider theme={ theme }>
          <Toaster position="top-right" />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);