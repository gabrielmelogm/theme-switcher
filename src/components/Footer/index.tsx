import { Avatar, Typography, Link } from "@mui/material"
import { Box } from "@mui/system"

type Props = {
  color: string
}

const Footer = (color: Props) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Link
        href="https://github.com/gabrielmelogm"
        target="_blank"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
          textDecoration: "none"
        }}
      >
        <Avatar 
          alt="Developer photo" 
          src="https://github.com/gabrielmelogm.png"
          sx={{ width: 30, height: 30 }}
        />
        <Typography variant="caption" component="p" color={color}>Developed by gabrielmelogm</Typography>
      </Link>
    </Box>
  )
}

export { Footer }
