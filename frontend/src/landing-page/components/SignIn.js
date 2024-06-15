import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Footer from "./Footer";

import AppAppBar from "./AppAppBar";
import getLPTheme from "../getLPTheme";

import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { useLoginUserMutation } from "../../services/userAuthApi";
import { Alert } from "@mui/material";

function ToggleCustomTheme({ showCustomTheme, toggleCustomTheme }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100dvw",
        position: "fixed",
        bottom: 24,
      }}
    >
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={showCustomTheme}
        onChange={toggleCustomTheme}
        aria-label="Platform"
        sx={{
          backgroundColor: "background.default",
          "& .Mui-selected": {
            pointerEvents: "none",
          },
        }}
      ></ToggleButtonGroup>
    </Box>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [server_error, setServerError] = React.useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(actualData);
    const res = await loginUser(actualData);
    console.log(res);
    if (res.error) {
      setServerError(res.error.data.errors);
    }
    if (res.data) {
      console.log(res.data);
      navigate("/bugfinder");
    }
  };

  const [mode, setMode] = React.useState("dark");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  const navigate = useNavigate();
  const gotoSignUp = () => {
    navigate("/signup");
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <Container
        component="main"
        maxWidth="md"
        sx={{
          marginTop: "140px",
          marginBottom: "30px",
          border: "#0A66C2 solid 2px",
          paddingBottom: 5,

          borderRadius: 10,
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    height: 48,
                  }}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
                {server_error.email ? (
                  <Typography
                    style={{
                      fontSize: 12,
                      color: "red",
                      paddingLeft: 10,
                      paddingTop: 5,
                    }}
                  >
                    {server_error.email[0]}
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{
                    height: 48,
                  }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                {server_error.password ? (
                  <Typography
                    style={{
                      fontSize: 12,
                      color: "red",
                      paddingLeft: 10,
                      paddingTop: 5,
                    }}
                  >
                    {server_error.password[0]}
                  </Typography>
                ) : (
                  ""
                )}
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link onClick={gotoSignUp} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>

            {server_error.non_field_errors ? (
              <Alert severity="error">{server_error.non_field_errors[0]}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Container>

      <Footer />
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}
