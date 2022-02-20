import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { theme, GlobalStyles } from "./utils";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

import Home from "./routes/Home";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Services from "./routes/Services";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="enquiry" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404! page doesn't exist </p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
