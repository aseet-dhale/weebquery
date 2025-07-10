import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

/**
 * A Material UI-based loading spinner component.
 * It displays a circular progress indicator and a customizable message.
 *
 * @param {object} props
 * @param {string} [props.message="Loading..."] - The message to display below the spinner.
 * @param {"primary" | "secondary" | "error" | "info" | "success" | "warning" | "inherit"} [props.color="primary"] - The color of the spinner, using MUI palette colors.
 * @param {number} [props.size=60] - The size of the spinner in pixels.
 */
const LoadingSpinner = ({ message = "Loading...", size = 60 }) => {
  return (
    // The main container for the spinner and message
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%", // Takes full height of its parent container
        width: "100%",
        minHeight: "200px", // Ensure it's visible even with small content
        color: "text.primary", // Inherit text color from theme
      }}
    >
      {/* Circular Progress Indicator */}
      <CircularProgress color="secondary" size={size} />

      {/* Loading message */}
      <Typography variant="body1" sx={{ mt: 2, color: "text.secondary" }}>
        {message}
      </Typography>
    </Box>
  );
};

export default LoadingSpinner;
