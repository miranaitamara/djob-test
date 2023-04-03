import React, { useState, useEffect, useContext } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import CheckOutlinedIcon from "@mui/icons-material/CheckOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Checkbox from "@mui/material/Checkbox";
import { Stack } from "@mui/system";

import api from "../utils/api";
import { filterData } from "../utils/help";
import { CollaboratorItemType } from "@/utils/type";
import SearchBar from "./searchBar";
import { CounterContext } from "../contexts/counter";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h6,
  backgroundColor: theme.palette.background.paper,
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  textAlign: "left",
  color: "#192735",
}));

export default function CollaboratorItem() {
  const [checked, setChecked]: any = React.useState([]);
  const { setCounter } = useContext(CounterContext);
  const [searchQuery, setSearchQuery] = useState() as any;
  const [collaborators, setCollaborators] = useState<CollaboratorItemType[]>(
    []
  );
  const dataFiltered = filterData(searchQuery, collaborators);

  const isAllSelected =
    collaborators.length > 0 &&
    checked &&
    checked.length === collaborators.length;

  const handleToggle = (value: string) => () => {
    const checkedAll = value;
    console.log(value);
    if (checkedAll === "all") {
      setChecked(
        checked && checked.length === collaborators.length
          ? []
          : collaborators.map((data) => data.id)
      );
      return;
    }

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(() => {
    const fetchData = async () => {
      const results = await api.getCollaboratorsData();
      setCollaborators(results["items"]);
    };
    setCounter(checked ? checked.length : 0);
    fetchData();
  }, [checked, setChecked]);

  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: 20,
      }}
    >
      <SearchBar setSearchQuery={setSearchQuery} />
      <Stack
        direction="row"
        alignItems="left"
        sx={{ paddingTop: "10px", paddingBottom: "10px" }}
      >
        <Checkbox
          value="all"
          onChange={handleToggle("all")}
          checked={isAllSelected}
        />
        <Div>{"Sélectionner tous les collaborateurs"}</Div>
      </Stack>
      <div
        className="scrollbar"
        style={{
          padding: 3,
          height: "660px",
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {dataFiltered.map((collaborator) => {
          const labelId = `checkbox-list-secondary-label-${collaborator.id}`;
          return (
            <List style={{ borderRadius: "30px" }}>
              <Paper
                onClick={handleToggle(collaborator.id)}
                elevation={3}
                style={{
                  borderRadius: "30px",
                  color: "#192735",
                  background:
                    checked && checked.includes(collaborator.id)
                      ? "#EEECFD"
                      : "white",
                }}
              >
                <ListItem
                  secondaryAction={
                    <Checkbox
                      edge="end"
                      icon={<></>}
                      checkedIcon={
                        <CheckOutlinedIcon style={{ color: "#9e9da1" }} />
                      }
                      onChange={handleToggle(collaborator.id)}
                      checked={checked.includes(collaborator.id)}
                      inputProps={{ "aria-labelledby": labelId }}
                    />
                  }
                  button
                  style={{ borderRadius: "30px" }}
                  key={collaborator.id + collaborator.name}
                >
                  <ListItemAvatar>
                    <Avatar alt="Profile Picture" src={collaborator.photoUrL} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={collaborator.name}
                    secondary={
                      collaborator.actif === true ? "Actif" : "Inactif"
                    }
                  />
                </ListItem>
              </Paper>
            </List>
          );
        })}
      </div>
    </div>
  );
}
