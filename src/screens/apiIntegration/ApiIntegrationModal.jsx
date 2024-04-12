import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import { FileCopy } from "@mui/icons-material";

const ApiIntegrationModal = ({ open, handleClose }) => {
  const textToCopy = "rghiioHGRGIAHGHGEO8EHGVSSfjdjjfjfjfjjjjjjsafuy";

  const handleCopyText = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #0051B7",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            gutterBottom
          >
            Your New Key
          </Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            gap={"2px"}
          >
            <TextField
              value={textToCopy}
              variant="outlined"
              inputProps={{ readOnly: true }}
            />
            <IconButton onClick={handleCopyText}>
              <FileCopy />
            </IconButton>
          </Stack>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} gutterBottom>
            *Save this key as it will not be available again.
          </Typography>
          <Button onClick={handleClose} variant="contained" sx={{ mt: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default ApiIntegrationModal;
