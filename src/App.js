import React, { PureComponent } from "react";

import "./App.css";
import { useNavigate, Link, Outlet, useLocation } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography, Box, IconButton} from "@mui/material";
//import {ArrowBackIcon} from '@mui/icons-material';

function App() {
  const navigate = useNavigate(); 
  const handleClickBack = () => navigate(-1);

  return (
    <Box>
      <AppBar position="static">
      <Typography>Итоговое задание по курсу React</Typography>
        <Toolbar>
          <IconButton onClick={handleClickBack}>Назад</IconButton>
          <Button>
            <Link to={`/`}>Главная</Link>
          </Button>
          <Button>
            <Link to={`/materials`}>Материалы на курсе</Link>
          </Button>
          <Button>
            <Link to={`/projects`}>Мои работы</Link>
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>
  );
}

export default App;
