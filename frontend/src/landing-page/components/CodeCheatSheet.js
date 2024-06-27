import * as React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import AppAppBar from "./AppAppBar";
import Footer from "./Footer";
import getLPTheme from "../getLPTheme";
import { Button, Divider, duration } from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { grey } from "@mui/material/colors";

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

export default function CodeCheatSheet() {
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
  // introduction
  const introduction = `Python (python.org)
Learn X in Y minutes (learnxinyminutes.com)
Regex in python (quickref.me)`;
  // hello world
  const helloworld = `>>> print("Hello, World!")
  
Hello, World!
`;

  //Variables
  const variables = `age = 18      # age is of type int
name = "John" # name is now of type str
print(name)
`;

  //Data Types
  const DataTypes = `str            	                Text
int, float, complex	        Numeric
list, tuple, range	        Sequence
dict	                        Mapping
set, frozenset	                Set
bool	                        Boolean
bytes, bytearray, memoryview	Binary
`;

  // Slicing String

  const SlicingString = `>>> msg = "Hello, World!"
>>> print(msg[2:5])
llo

`;

  // Lists

  const Lists = `mylist = []
mylist.append(1)
mylist.append(2)
for item in mylist:
    print(item) # prints out 1,2


`;

  // If Else

  const IfElse = `num = 200
if num > 0:
    print("num is greater than 0")
else:
    print("num is not greater than 0")



`;

  // Loops

  const Loops = `for item in range(6):
    if item == 3: break
    print(item)
else:
    print("Finally finished!")




`;
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
            pb: { xs: 8, sm: 5 },
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
              Python&nbsp;
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
                Cheatsheet
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              color="text.secondary"
            >
              Our website provide Python cheat sheet which is a one-page
              reference sheet for the Python 3 programming language. <br />
            </Typography>
          </Stack>
        </Container>

        <Divider
          style={{
            marginTop: "2rem",
            marginBottom: "2rem",
            backgroundColor:"#7069cc"
          }}
        ></Divider>

        <div
          style={{
            width: "92%",
            height: "100%",
            marginLeft: 80,
            marginBottom:"5rem"
          }}
        >
          {/* Getting Started div */}
          <div>
            <p
              style={{
                fontSize: 25,
              }}
            >
              <span
                style={{
                  color: "#55A6F6",
                }}
              >
                #
              </span>{" "}
              Getting Started
            </p>

            <div
              style={{
                display: "flex",
                gap: 15,
              }}
            >
              {/* introduction */}
              <div
                style={{
                  width: "32%",
                  borderRadius: 7,
                }}
              >
                <p>Introduction</p>
                <SyntaxHighlighter
                  language="python"
                  style={atomOneDark}
                  customStyle={{
                    padding: 25,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  {introduction}
                </SyntaxHighlighter>
                <div
                  style={{
                    backgroundColor: "gray",
                    paddingLeft: 25,
                    paddingTop: 1,
                    paddingBottom: 1,
                    marginTop: -16,
                  }}
                >
                  <p>''</p>
                </div>
              </div>
              {/* Hello World */}
              <div
                style={{
                  width: "32%",
                  borderRadius: 7,
                }}
              >
                <p>Hello World</p>
                <SyntaxHighlighter
                  language="python"
                  style={atomOneDark}
                  customStyle={{
                    padding: 25,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  {helloworld}
                </SyntaxHighlighter>
                <div
                  style={{
                    backgroundColor: "gray",
                    paddingLeft: 25,
                    paddingTop: 1,
                    paddingBottom: 1,
                    marginTop: -16,
                  }}
                >
                  <p>The famous "Hello World" program in Python</p>
                </div>
              </div>

              {/* Variables */}
              <div
                style={{
                  width: "32%",
                  borderRadius: 7,
                }}
              >
                <p>Variables</p>
                <SyntaxHighlighter
                  language="python"
                  style={atomOneDark}
                  customStyle={{
                    padding: 25,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                  }}
                >
                  {variables}
                </SyntaxHighlighter>
                <div
                  style={{
                    backgroundColor: "gray",
                    paddingLeft: 25,
                    paddingTop: 1,
                    paddingBottom: 1,
                    marginTop: -16,
                  }}
                >
                  <p>Python can't declare a variable without assignment.</p>
                </div>
              </div>
            </div>
            {/* next line */}
            <div
              style={{
                display: "flex",
                gap: 15,
                marginTop: "2rem",
              }}
            >
              {/* Data Types */}
              <div
                style={{
                  width: "32%",

                  borderRadius: 7,
                }}
              >
                <p>Data Types</p>
                <SyntaxHighlighter
                  language="python"
                  style={atomOneDark}
                  customStyle={{
                    padding: 25,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    height: "475px",
                  }}
                >
                  {DataTypes}
                </SyntaxHighlighter>
                <div
                  style={{
                    backgroundColor: "gray",
                    paddingLeft: 25,
                    paddingTop: 1,
                    paddingBottom: 1,
                    marginTop: -16,
                  }}
                >
                  <p>See: Data Types</p>
                </div>
              </div>
              <div
                style={{
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    gap: 15,
                  }}
                >
                  {/* Slicing String */}
                  <div
                    style={{
                      width: "48%",
                      borderRadius: 7,
                    }}
                  >
                    <p>Slicing String</p>
                    <SyntaxHighlighter
                      language="python"
                      style={atomOneDark}
                      customStyle={{
                        padding: 25,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        height: "207px",
                      }}
                    >
                      {SlicingString}
                    </SyntaxHighlighter>
                    <div
                      style={{
                        backgroundColor: "gray",
                        paddingLeft: 25,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginTop: -16,
                      }}
                    >
                      <p>See: Slicing String</p>
                    </div>
                  </div>
                  {/* Lists  */}
                  <div
                    style={{
                      width: "48%",
                      borderRadius: 7,
                    }}
                  >
                    <p>Lists </p>
                    <SyntaxHighlighter
                      language="python"
                      style={atomOneDark}
                      customStyle={{
                        padding: 25,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                      }}
                    >
                      {Lists}
                    </SyntaxHighlighter>
                    <div
                      style={{
                        backgroundColor: "gray",
                        paddingLeft: 25,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginTop: -16,
                      }}
                    >
                      <p>See: Lists </p>
                    </div>
                  </div>
                </div>
                {/* another row */}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    gap: 15,
                  }}
                >
                  {/* If Else */}
                  <div
                    style={{
                      width: "48%",
                      borderRadius: 7,
                    }}
                  >
                    <p>If Else</p>
                    <SyntaxHighlighter
                      language="python"
                      style={atomOneDark}
                      customStyle={{
                        padding: 25,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        height: "160px",
                      }}
                    >
                      {IfElse}
                    </SyntaxHighlighter>
                    <div
                      style={{
                        backgroundColor: "gray",
                        paddingLeft: 25,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginTop: -16,
                      }}
                    >
                      <p>See: If Else</p>
                    </div>
                  </div>
                  {/* Loops  */}
                  <div
                    style={{
                      width: "48%",
                      borderRadius: 7,
                    }}
                  >
                    <p>Loops </p>
                    <SyntaxHighlighter
                      language="python"
                      style={atomOneDark}
                      customStyle={{
                        padding: 25,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        height: "160px",
                      }}
                    >
                      {Loops}
                    </SyntaxHighlighter>
                    <div
                      style={{
                        backgroundColor: "gray",
                        paddingLeft: 25,
                        paddingTop: 1,
                        paddingBottom: 1,
                        marginTop: -16,
                      }}
                    >
                      <p>See: Loops </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Divider sx={{backgroundColor:"#7069cc"}}/>
        <Footer />
      </Box>
      <ToggleCustomTheme
        showCustomTheme={showCustomTheme}
        toggleCustomTheme={toggleCustomTheme}
      />
    </ThemeProvider>
  );
}
