import { createTheme } from "@mui/material/styles";

// --- COLOR PALETTE: SLATE & VIOLET ---
const slate = {
  900: "#0f172a", // Main Background
  800: "#1e293b", // Paper Background (Cards, AppBar)
  700: "#334155", // Borders, Dividers
  600: "#475569",
  400: "#94a3b8", // Secondary Text
  200: "#e2e8f0", // Primary Text
  100: "#f1f5f9", // Lighter Text/Icons
};

const violet = {
  main: "#8b5cf6", // Primary Accent
  dark: "#7c3aed",
  light: "#a78bfa",
};

// --- THEME DEFINITION ---
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: violet.main,
      light: violet.light,
      dark: violet.dark,
      contrastText: slate[100],
    },
    // You can define a secondary color if needed, e.g., for tags or other accents
    // secondary: { main: '#2dd4bf' }, // Example: Teal
    background: {
      default: slate[900],
      paper: slate[800],
    },
    text: {
      primary: slate[200],
      secondary: slate[400],
      disabled: slate[600],
    },
    divider: slate[700],
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    // Let the palette handle text colors for better consistency
    h1: { fontSize: "3rem", fontWeight: 700 },
    h2: { fontSize: "2.5rem", fontWeight: 600 },
    h3: { fontSize: "2rem", fontWeight: 600 },
    h4: { fontSize: "1.75rem", fontWeight: 500 },
    h5: { fontSize: "1.5rem", fontWeight: 500 },
    h6: { fontSize: "1.25rem", fontWeight: 500 },
    button: { textTransform: "none", fontWeight: 600, letterSpacing: "0.5px" },
  },
  shape: {
    borderRadius: 12, // A more modern, slightly rounder shape
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        body {
          background-color: ${slate[900]};
          transition: background-color 0.3s ease;
        }
        ::-webkit-scrollbar {
            width: 8px;
        }
        ::-webkit-scrollbar-track {
            background: ${slate[700]};
        }
        ::-webkit-scrollbar-thumb {
            background: ${slate[600]};
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: ${slate[400]};
        }
      `,
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: slate[800],
          // Use a subtle border instead of shadow for a flatter, more modern look
          borderBottom: `1px solid ${slate[700]}`,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: slate[800],
          backgroundImage: "none", // Ensure no gradient from default MUI themes
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: slate[800],
          border: `1px solid ${slate[700]}`,
          boxShadow: "none",
          transition:
            "border-color 0.2s ease-in-out, transform 0.2s ease-in-out",
          "&:hover": {
            borderColor: violet.main, // Highlight with primary color on hover
            transform: "translateY(-4px)", // Lift effect on hover
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: "8px 16px",
        },
        containedPrimary: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
            backgroundColor: violet.dark,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: violet.light,
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

export default theme;
