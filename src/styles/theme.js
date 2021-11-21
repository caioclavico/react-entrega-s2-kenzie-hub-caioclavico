import { createTheme } from "@material-ui/core";

const themeDefault = createTheme({
  palette: {
    primary: {
      main: "#403caa",
    },
    secondary: {
      main: "#11995e",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "buttonGray" },
          style: {
            border: "2px solid #f5f5f5",
            borderRadius: 8,
            color: "#999999",
            backgroundColor: "#f5f5f5",
            fontWeight: 600,
            height: "60px",
            "&:hover": {
              border: "2px solid #333333",
            },
          },
        },
        {
          props: { variant: "button" },
          style: {
            border: "2px solid #403caa",
            borderRadius: 8,
            color: "#fff",
            backgroundColor: "#403caa",
            fontWeight: 600,
            height: "60px",
            "&:hover": {
              backgroundColor: "#403caa",
              border: "2px solid #333333",
            },
          },
        },
        {
          props: { variant: "button", color: "secondary" },
          style: {
            border: "2px solid #11995e",
            backgroundColor: "#11995e",
            "&:hover": {
              backgroundColor: "#11995e",
            },
          },
        },
      ],
    },
    MuiTextField: {
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "#f5f5f5",
            color: "#333333",
            border: "2px solid #F5F5F5",
            borderRadius: 8,
            height: "60px",
            "& :focus": {
              color: "#333333",
              backgroundColor: "#fff",
              borderColor: "#333333",
            },
            "& label.Mui-focused": {
              color: "#999999",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                // - Set the Input border when parent is focused
                borderColor: "#333333",
              },
            },
          },
        },
      ],
    },
  },
});

export default themeDefault;
