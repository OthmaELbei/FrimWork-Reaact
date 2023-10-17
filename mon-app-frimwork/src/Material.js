import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { Checkbox } from "@mui/material";
import Slider from "@mui/material/Slider";
import Chip from "@mui/material/Chip";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Material() {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        onClick={() => {
          alert("clicked");
        }}
        color="primary"
      >
        primary
      </Button>
      <Button variant="outlined" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>

      <Checkbox {...label} />
      <Slider aria-label="Volume" />
      <Stack direction="row" spacing={1}>
        <Chip label="primary" color="primary" variant="outlined" />
        <Chip label="success" color="success" variant="outlined" />
      </Stack>
    </Stack>
    // <Stack direction="row" spacing={2}>
    //   <Avatar>H</Avatar>
    //   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
    //   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
    // </Stack>
  );
}
