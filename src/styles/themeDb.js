import { createTheme } from "@material-ui/core";

const themeDb = createTheme({
  palette: {
    primary: {
      main: "#403caa",
    },
    secondary: {
      main: "#11995e",
    },
    background: {
      default: "#f5f5f5",
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
    MuiCard: {
      variants: [
        {
          props: { variant: "boxCard" },
          style: {
            paddingTop: "40px",
            display: "flex",
            justifyContent: "space-between",
            width: "400px",
            cursor: "pointer",
            "&:hover .MuiPaper-boxIcon": {
              backgroundColor: "#403caa",
              color: "#fff",
            },
            "&:hover .MuiPaper-lineEnd": {
              backgroundColor: "#403caa",
            },
          },
        },
        {
          props: { variant: "boxCard", color: "secondary" },
          style: {
            "&:hover .MuiPaper-boxIcon": {
              backgroundColor: "#11995e",
            },
            "&:hover .MuiPaper-lineEnd": {
              backgroundColor: "#11995e",
            },
          },
        },
        {
          props: { variant: "boxIcon" },
          style: {
            width: "71px",
            height: "77px",
            backgroundColor: "rgba(64, 60, 170, 0.1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "5px",
            color: "#403caa",
          },
        },
        {
          props: { variant: "boxIcon", color: "secondary" },
          style: {
            backgroundColor: "rgba(17, 153, 94, 0.1)",
            color: "#11995e",
          },
        },
        {
          props: { variant: "boxDetails" },
          style: {
            marginLeft: "10px",
            padding: "5px 0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        },
        {
          props: { variant: "lineEnd" },
          style: {
            width: "2px",
            height: "77px",
            backgroundColor: "#F5F5F5",
          },
        },
      ],
    },
    MuiTypography: {
      variants: [
        {
          props: { variant: "status" },
          style: {
            backgroundColor: "rgba(64, 60, 170, 0.1)",
            color: "#403caa",
            borderRadius: "8px",
            textAlign: "center",
            fontWeight: "500",
          },
        },
        {
          props: { variant: "status", color: "secondary" },
          style: {
            backgroundColor: "rgba(17, 153, 94, 0.1)",
            color: "#11995e",
          },
        },
        {
          props: { variant: "title" },
          style: {
            fontWeight: "700",
            fontSize: "18px",
          },
        },
        {
          props: { variant: "description" },
          style: {
            fontWeight: "400",
            fontSize: "14px",
            color: "#999999",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "300px",
          },
        },
      ],
    },
  },
});

export default themeDb;
