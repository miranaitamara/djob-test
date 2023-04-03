import { useContext } from "react";
import { styled } from "@mui/material/styles";
import { Button, Stack } from "@mui/material";

import { CounterContext } from "../contexts/counter";
import { MessageInputContext } from "../contexts/messageInput";

const ButtonSubmit = styled(Button)({
  height: "35px",
  borderRadius: "15px",
  width: "100%",
  background: "#4925E2",
  color: "white",
});

export default function FooterButton() {
  const { counter, setCounter } = useContext(CounterContext);
  const { message, setMessage } = useContext(MessageInputContext);

  return (
    <Stack style={{ marginTop: "45px" }} direction="row" spacing={2}>
      <Button
        onClick={() => {
          setCounter(0), setMessage("");
        }}
        style={{
          height: "35px",
          borderRadius: "15px",
          color: "#4925E2",
          borderColor: "#4925E2",
        }}
        variant="outlined"
        color="secondary"
      >
        Annuler
      </Button>

      <ButtonSubmit
        variant="contained"
        disabled={message && counter > 0 ? false : true}
      >
        Envoyer
      </ButtonSubmit>
    </Stack>
  );
}
