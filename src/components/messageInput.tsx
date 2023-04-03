import * as React from "react";
import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import Paper from "@mui/material/Paper";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";

import { MessageInputContext } from "../contexts/messageInput";

const CustomBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: #4728c9;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #4728c9;
      border-radius: 35px;
    }
  }
`;

const ImageThumb = ({ image }: any) => {
  return (
    <Paper
      style={{
        marginLeft: "5px",
        width: "100px",
        height: "74px",
        borderRadius: "15px",
      }}
      elevation={0}
    >
      <img
        style={{
          marginTop: "10PX",
          width: "100px",
          height: "90px",
          borderRadius: "15px",
        }}
        src={URL.createObjectURL(image)}
        alt={image.name}
      />
    </Paper>
  );
};

function FileUpload() {
  // State to store uploaded file
  const [file, setFile] = React.useState("");

  // Handles file upload event and updates state
  function handleUpload(event: any) {
    setFile(event.target.files[0]);
  }

  return (
    <div id="upload-box">
      {file ? (
        <ImageThumb image={file} />
      ) : (
        <Paper
          style={{
            marginLeft: "5px",
            width: "100px",
            height: "89px",
            borderRadius: "15px",
          }}
          elevation={0}
        >
          <img
            style={{
              marginTop: "5px",
              width: "120px",
              height: "110px",
              borderRadius: "25px",
            }}
            src={"../thumbnail-default.jpg"}
            alt={"default"}
          />
        </Paper>
      )}
      <div style={{ textAlign: "left" }}>
        <IconButton
          style={{
            padding: "0",
            border: "2px solid #1A2027",
            borderRadius: "8px",
            background: "white",
          }}
          onChange={handleUpload}
          component="label"
        >
          <input hidden accept="image/*" type="file" />{" "}
          <CameraAltOutlinedIcon
            style={{ fontSize: "22px", color: "#1A2027" }}
          />
        </IconButton>
      </div>
    </div>
  );
}

export default function MessageInput() {
  const { message, setMessage } = React.useContext(MessageInputContext);

  const handleTextInputChange = (event: any) => {
    setMessage(event.target.value);
  };
  return (
    <Stack
      style={{ marginBottom: "25px", marginTop: "20px" }}
      direction="row"
      spacing={2}
    >
      <CustomBorderTextField
        sx={{
          width: "100%",
        }}
        focused
        id="outlined-multiline-static"
        label="Quelques mots à ajouter ?"
        multiline
        rows={4}
        value={message}
        onChange={handleTextInputChange}
      />
      <FileUpload />
    </Stack>
  );
}
