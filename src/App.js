import React from "react";

import "./App.css";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box, IconButton} from "@mui/material";

import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';

function App() {
  const navigate = useNavigate(); 
  const handleClickBack = () => navigate(-1);
  let location = useLocation();
  const notAtHome = location.pathname !== "/";
  return (
    <Box>
      <AppBar position="static">
      <Typography variant="h4" align='center'>Итоговое задание по курсу React</Typography>
        <Toolbar>
          <Button>
            <Link to={`/`}>Главная</Link>
          </Button>
          <Button>
            <Link to={`/materials`}>Материалы на курсе</Link>
          </Button>
          <Button>
            <Link to={`/projects`}>Мои работы</Link>
          </Button>
          <Button>
            <Link to={`/issues`}>Обращения (issues)</Link>
          </Button>
        </Toolbar>
      </AppBar>
      {notAtHome && <IconButton onClick={handleClickBack}><KeyboardBackspaceSharpIcon /></IconButton>}
      <Outlet />
    </Box>
  );
}

export default App;
