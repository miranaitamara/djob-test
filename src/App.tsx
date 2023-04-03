import React from "react";
import "./App.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CustomizedSwitch from "./components/customizedSwitch";
import FooterButton from "./components/footerButton";
import MessageInput from "./components/messageInput";
import CollaboratorItem from "./components/collaboratorItem";
import TokenItem from "./components/tokenItems";

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h6,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  textAlign: "left",
  color: "#192735",
}));

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} columns={16}>
        <Grid item xs={8}>
          <Div>{"Sélectionne des collaborateurs"}</Div>
          <CollaboratorItem />
        </Grid>
        <Grid item xs={8}>
          <Div>{"Personnalise ton message !"}</Div>
          <MessageInput />

          <Div>{"Sélectionne un jeton !"}</Div>
          <TokenItem />

          <CustomizedSwitch />
          <FooterButton />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
