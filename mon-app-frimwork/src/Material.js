// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import Avatar from "@mui/material/Avatar";
// import { deepOrange, deepPurple } from "@mui/material/colors";
// import { Checkbox } from "@mui/material";
// import Slider from "@mui/material/Slider";
// import Chip from "@mui/material/Chip";
// const label = { inputProps: { "aria-label": "Checkbox demo" } };

// export default function Material() {
//   return (
//     <Stack direction="row" spacing={2}>
//       <Button
//         variant="contained"
//         onClick={() => {
//           alert("clicked");
//         }}
//         color="primary"
//       >
//         primary
//       </Button>
//       <Button variant="outlined" color="success">
//         Success
//       </Button>
//       <Button variant="outlined" color="error">
//         Error
//       </Button>

//       <Checkbox {...label} />
//       <Slider aria-label="Volume" />
//       <Stack direction="row" spacing={1}>
//         <Chip label="primary" color="primary" variant="outlined" />
//         <Chip label="success" color="success" variant="outlined" />
//       </Stack>
//     </Stack>
//     // <Stack direction="row" spacing={2}>
//     //   <Avatar>H</Avatar>
//     //   <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
//     //   <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
//     // </Stack>
//   );
// }

// export default function () {
//   return <h1> uhoikom </h1>;
// }
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Switch from "@mui/material/Switch";
import Collapse from "@mui/material/Collapse";

const label = { inputProps: { "aria-label": "Switch demo" } };
export default function Material() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Switch
            {...label}
            value={checked}
            onChange={() => {
              setChecked((prev) => !prev);
            }}
            defaultChecked
          />
        </AccordionDetails>
      </Accordion>
      <Collapse in={checked} collapsedSize={40}>
        <div style={{ backgroundColor: "orange", height: "100px" }}>ouyd</div>
      </Collapse>
    </div>
  );
}
