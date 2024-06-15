import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Editor from "@monaco-editor/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import DebugResponse from "./DebugResponse";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import getLPTheme from "../getLPTheme";
import { Button } from "@mui/material";
import { useRef } from "react";
import { Context } from "../../context/context";

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

ToggleCustomTheme.propTypes = {
  showCustomTheme: PropTypes.shape({
    valueOf: PropTypes.func.isRequired,
  }).isRequired,
  toggleCustomTheme: PropTypes.func.isRequired,
};

export default function BugFinder() {
  const [mode, setMode] = React.useState("dark");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));
  const defaultTheme = createTheme({ palette: { mode } });
  const [showDebugContainer, setShowDebugContainer] = React.useState("");

  let {
    input,
    setInput,
    recentPrompt,
    setRecentPrompt,
    showResult,
    onSent,
    setShowResult,
    resultData,
    setResultData,
    loading,
    setLoading,
  } = React.useContext(Context);

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "dark" : "dark"));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  let editorRef = useRef(null);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  let getEditorValue = async () => {
    // let finaldebugValue = "ggggggg";

    input = editorRef.current.getValue();
    setInput(input);

    onSent(
      "Identify where given code is python or not. if the given code is in python then Where is the bug in this python code :" +
        input
    );

    // if (value === "") {
    //   setShowDebugContainer(false);
    // } else {
    //   setShowDebugContainer(true);
    // }
  };

  return (
    <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />

      <Box sx={{ bgcolor: "background.default" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 14, sm: 20 },
            pb: { xs: 8, sm: 10 },
          }}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ width: { xs: "100%", sm: "70%" } }}
          >
            <Typography
              component="h1"
              variant="h1"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignSelf: "center",
                textAlign: "center",
              }}
            >
              Let's Debug&nbsp;
              <Typography
                component="span"
                variant="h1"
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "primary.main"
                      : "primary.light",
                }}
              >
                Code
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
            >
              Our website is a bug finder tool designed specifically for Python
              programmers <br />
              Not only does it identify bugs, but it also provides suggestions
              and solutions to resolve them. Whether you're a beginner or an
              experienced programmer, our bug finder tool is here to help
              streamline your coding process and improve the quality of your
              Python projects..
            </Typography>
          </Stack>
        </Container>

        <h3
          style={{
            fontSize: "24px",
            textAlign: "center",
            fontWeight: "bold",
          }}
          class="question"
        >
          Write Your Python Code Here To Debug
        </h3>

        <div
          class="editor-container"
          style={{
            width: "900px",
            height: "540px",
            marginLeft: 150,
            position: "relative",
            marginBottom: 150,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              height: "100%",
              width: "100%",
              fontSize: "20px",
            }}
          >
            <Editor
              height="80vh"
              width="80vw"
              theme="vs-dark"
              defaultLanguage="python"
              defaultValue=""
              onMount={handleEditorDidMount}

              // onChange={(e) => setInput(e.target.value)}
              // value={input}
            ></Editor>

            <Button
              title="Let's Debug"
              sx={{
                backgroundColor: "#0959AA",
                width: "80%",
                fontSize: "18px",
                marginTop: "50px",
                marginLeft: "280px",
                fontWeight: "bold",
                textAlign: "center",
                color: "#fff",
              }}
              onClick={() => getEditorValue()}
            >
              Let's Debug Code
            </Button>
          </div>
        </div>

        {!showResult ? <></> : <DebugResponse></DebugResponse>}

        <Footer />
      </Box>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}
