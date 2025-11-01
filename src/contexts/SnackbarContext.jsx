import { createContext, useContext, useState } from "react";
import { Snackbar, Alert } from "@mui/material";

const SnackbarContext = createContext();

export const SnackbarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState(false);

  const handleSnackbarOpen = (message) => {
    setOpen(true);
    setMsg(message);
  };

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <SnackbarContext value={{ handleSnackbarOpen, handleSnackbarClose }}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {msg}
        </Alert>
      </Snackbar>
      {children}
    </SnackbarContext>
  );
};

export const useSnackbar = () => { // creating a custom react hook
  return useContext(SnackbarContext);
};