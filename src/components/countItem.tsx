import { useState, useContext, useEffect } from "react";
import { IconButton, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { CounterContext } from "../contexts/counter";


interface Props {
  checked: boolean;
}

export default function CountItem({ checked }: Props) {
  const [count, setCount] = useState(0);
  const { counter } = useContext(CounterContext);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  useEffect(() => {
    if (checked) {
      setCount(1);
    }
  }, [counter, checked]);

  return (
    <Stack
      style={{
        marginTop: "10px",
        width: 350,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        textAlign: "center",
      }}
      alignItems="center"
    >
      <IconButton
        onClick={decrementCount}
        style={{
          marginTop: "45px",
          right: "-20px",
          background: counter > 1 && count>0 ? "#4925E2" : "#DDDCDD",
        }}
        aria-label="add an alarm"
      >
        <RemoveOutlinedIcon style={{ color: counter > 1 && count>0  ? "white" : "" }} />
      </IconButton>
      <Paper
        elevation={4}
        sx={{
          marginTop: "10px",
          padding: "12px",
          borderRadius: "25px",
          width: "260px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Typography variant="h4" component="div" gutterBottom>
          {count > 0 ? count : 0}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          Total:{count > 0 ? count * counter : 0}
        </Typography>
      </Paper>
      <IconButton
        onClick={incrementCount}
        style={{
          marginTop: "45px",
          left: "-20px",
          fontSize: "55px",
          background: count > 0 && counter > 0  ? "#4925E2" : "#DDDCDD",
        }}
        aria-label="add an alarm"
      >
        <AddOutlinedIcon style={{ color: count > 0 && counter > 0 ? "white" : "" }} />
      </IconButton>
    </Stack>
  );
}
