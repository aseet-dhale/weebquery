import { Typography } from "@mui/material";

export default function Error({ message = "Failed to load" }) {
  return (
    <>
      <Typography>{message}</Typography>
    </>
  );
}
