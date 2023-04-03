import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const label = { inputProps: { "aria-label": "Color switch demo" } };
const Div = styled("div")(({ theme }) => ({
  ...theme.typography.h6,
  padding: theme.spacing(1),
  textAlign: "center",
  color: '#192735',
}));

const CustomSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#4121C7",
   
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#4121C7",
  },
}));
export default function CustomizedSwitch() {
  return (
    <Stack style={{ marginTop: "20px" }} alignItems="center">
      <Div>{"Quelle visibilité souhaites-tu ? "}</Div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography
          sx={{ fontSize: 16, fontStyle: "italic" }}
          color="#192735"
        >
          Privé
        </Typography>
        <CustomSwitch {...label} defaultChecked />
        <Typography
          sx={{ fontSize: 16, fontStyle: "italic" }}
          color="#192735"
        >
          Public
        </Typography>
      </Stack>
    </Stack>
  );
}
