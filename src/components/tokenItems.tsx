import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Avatar from "@mui/material/Avatar";

import { TokenItemType } from "@/utils/type";
import api from "../utils/api";
import CountItem from "./countItem";

const Div = styled("div")(() => ({
  overflow: "hidden",
  WebkitLineClamp: 2,
  width: 90,
  height: 40,
  display: "-webkit-box !important",
  WebkitBoxOrient: "vertical",
}));

export default function TokenItem() {
  const [checked, setChecked] = React.useState("");
  const [tokens, setTokens] = useState<TokenItemType[]>([]);

  const ref = useRef<HTMLDivElement>(null);
  const onWheel = (e: any) => {
    const elelemnt = ref.current;
    if (elelemnt) {
      if (e.deltaY == 0) return;
      elelemnt.scrollTo({
        left: elelemnt.scrollLeft + e.deltaY,
      });
    }
  };

  const handleToggle = (value: string) => () => {
    setChecked(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const results = await api.getTokensData();
      setTokens(results["items"]);
    };

    fetchData();
  }, []);

  return (
    <>
      <div
        ref={ref}
        onWheel={onWheel}
        style={{
          display: "flex",
          width: "100%",
          overflowX: "hidden",
          padding: 20,
          cursor: "pointer",
        }}
      >
        <Stack
          direction="row"
          spacing={3}
          alignItems="left"
          sx={{ paddingTop: "5px", paddingBottom: "45px" }}
        >
          {tokens.map((token) => {
            return (
              <Paper
                onClick={handleToggle(token.id)}
                elevation={15}
                sx={{
                  borderRadius: "30px",
                  width: "120px",
                  height: "160px",
                }}
              >
                <Stack
                  direction="column"
                  spacing={3}
                  alignItems="center"
                  sx={{ paddingTop: "10px", paddingBottom: "10px" }}
                >
                  <Div>
                    <Typography
                      sx={{ fontWeight: "bold" }}
                      color={checked.includes(token.id) ? "#4925E2" : "#919CA6"}
                      variant="subtitle2"
                      component="div"
                    >
                      {token.name}
                    </Typography>
                  </Div>
                  <Typography
                    sx={{ fontWeight: "bold" }}
                    color={checked.includes(token.id) ? "#4925E2" : "#919CA6"}
                    variant="h5"
                    component="div"
                  >
                    {token.version}
                  </Typography>
                  <Avatar
                    style={{
                      width: "70px",
                      height: "70px",
                      background: checked.includes(token.id)
                        ? "rgb(234, 227, 255)"
                        : "",
                    }}
                    alt="Profile Picture"
                    src={token.photoUrL}
                  />
                </Stack>
              </Paper>
            );
          })}
        </Stack>
      </div>

      <Stack style={{ marginTop: "10px" }} alignItems="center">
        <CountItem checked={checked ? true : false} />
      </Stack>
    </>
  );
}
