import "./navbar.css";
import React from "react";
import { AiOutlineHome, AiOutlineQuestionCircle } from "react-icons/ai";
import { SiGoogleclassroom, SiDarkreader } from "react-icons/si";
import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";
import CopyRight from "./copyRight/copyright";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../App";
import { useContext } from "react";
import Logo from "../../pages/images/logo.webp";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";

const Navbar = () => {
  const navigate = useNavigate();

  const useThemeContext = useContext(ThemeContext);
  const { toggleTheme } = useThemeContext;

  return (
    <>
      <div id="tab">
        <span id="logo">
          <img
            src={Logo}
            style={{ width: "3rem", height: "3rem" }}
            onClick={() => {
              navigate("/");
            }}
          />
        </span>
        <div id="iconStart">
          <Tooltip
            title="Home"
            placement="right"
            disableFocusListener
            disableTouchListener
            arrow
          >
            <IconButton
              className="iconCover 1"
              sx={{ "&:hover": { backgroundColor: "white" } }}
              onClick={() => navigate("/")}
            >
              <AiOutlineHome className="icon" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="My Quizzes"
            placement="right"
            disableFocusListener
            disableTouchListener
            arrow
          >
            <IconButton
              className="iconCover 2"
              sx={{ "&:hover": { backgroundColor: "white" } }}
              onClick={() => navigate("/classroom")}
            >
              <SiGoogleclassroom className="icon" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Settings"
            placement="right"
            disableFocusListener
            disableTouchListener
            arrow
          >
            <IconButton
              className="iconCover 3"
              sx={{ "&:hover": { backgroundColor: "white" } }}
              onClick={() => navigate("/settings")}
            >
              <IoSettingsOutline className="icon" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Score Card"
            placement="right"
            disableFocusListener
            disableTouchListener
            arrow
          >
            <IconButton
              className="iconCover 4"
              sx={{ "&:hover": { backgroundColor: "white" }}}
              onClick={() => navigate("/scorecard")}
            >
              <IoStatsChartOutline className="icon" />
            </IconButton>
          </Tooltip>

          <Tooltip
            title="Explore"
            placement="right"
            disableFocusListener
            disableTouchListener
            arrow
          >
            <IconButton
              className="iconCover 5"
              sx={{ "&:hover": { backgroundColor: "white" } }}
              onClick={() => navigate("/aboutUs")}
            >
              <AiOutlineQuestionCircle className="icon" />
            </IconButton>
          </Tooltip>

          <hr />
          
            <IconButton id="darkmode" onClick={toggleTheme} className="iconCover 6">
              <SiDarkreader className="icon" />
            </IconButton>
          
          <br />
          <div id="copyright" className="7">
            {CopyRight()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
