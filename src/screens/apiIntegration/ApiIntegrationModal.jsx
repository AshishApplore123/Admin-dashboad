import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  Stack,
} from "@mui/material";
import FileCopyOutlinedIcon from "@mui/icons-material/FileCopyOutlined";
import { toast } from "react-toastify";

const ApiIntegrationModal = ({ open, handleClose, apiKey }) => {
  const handleCopyText = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success("API Key copied to your clipboard.");
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
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={"8px"}
            sx={{ mb: 2 }}
          >
            <TextField
              value={apiKey}
              variant="outlined"
              inputProps={{ readOnly: true, style: { color: "#777" } }} // Adjust the color here
              multiline
              rows={1}
              // maxRows={4}
              sx={{ flex: 1 }}
            />
            <IconButton
              onClick={handleCopyText}
              sx={{ flex: "none", color: "#0051B7" }}
            >
              <FileCopyOutlinedIcon />
            </IconButton>
          </Stack>
          <Typography
            id="modal-modal-description"
            variant="caption"
            sx={{ mt: 2, color: "#ff6b6b" }}
            gutterBottom
          >
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
