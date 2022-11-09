import { useState, useEffect } from "react";
import Checkbox from "react-custom-checkbox";

import PasswordGenerator from "./utils/PasswordGenerator";

import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

import zxcvbn from "zxcvbn";

// Icons
import { check, copy } from "./constants/images";
import { ReactComponent as ArrowRight } from "./assets/icon-arrow-right.svg";
import { ReactComponent as CopyIcon } from "./assets/icon-copy.svg";
import DoneIcon from "@mui/icons-material/Done";

const PasswordSlider = styled(Slider)(({}) => ({
  height: 8,
  "& .MuiSlider-track": {
    background: "#a4ffaf",
    border: "none",
  },
  "& .MuiSlider-rail": {
    background: "#18171F",
  },
  "& .MuiSlider-thumb": {
    width: 28,
    height: 28,
    backgroundColor: "#E6E5EA",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      background: "#18171F",
      border: "2px solid #a4ffaf",
      boxShadow: "none",
    },
  },
}));

function App() {
  const [password, setPassword] = useState("123456");
  const [length, setLength] = useState(10);
  const [uppercaseIncluded, setUppercaseIncluded] = useState(false);
  const [lowerCaseIncluded, setLowerCaseIncluded] = useState(false);
  const [numbersIncluded, setNumbersIncluded] = useState(false);
  const [symbolsIncluded, setSymbolsIncluded] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState("uknown");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
  };

  const checkPassword = () => {
    const result = zxcvbn(password);

    console.log(result.score);

    if (result.score == 0) {
      setPasswordStrength("too weak");
    }
    if (result.score == 1) {
      setPasswordStrength("weak");
    }
    if (result.score == 2) {
      setPasswordStrength("medium");
    }
    if (result.score == 4 || result.score == 3) {
      setPasswordStrength("strong");
    }
  };

  const generatePassword = () => {
    if (
      uppercaseIncluded ||
      lowerCaseIncluded ||
      numbersIncluded ||
      symbolsIncluded
    ) {
      const password = PasswordGenerator(
        length,
        uppercaseIncluded,
        lowerCaseIncluded,
        numbersIncluded,
        symbolsIncluded
      );
      const animation1 = PasswordGenerator(
        length,
        uppercaseIncluded,
        lowerCaseIncluded,
        numbersIncluded,
        symbolsIncluded
      );
      const animation2 = PasswordGenerator(
        length,
        uppercaseIncluded,
        lowerCaseIncluded,
        numbersIncluded,
        symbolsIncluded
      );
      const animation3 = PasswordGenerator(
        length,
        uppercaseIncluded,
        lowerCaseIncluded,
        numbersIncluded,
        symbolsIncluded
      );

      setPassword(animation1);
      setTimeout(() => {
        setPassword(animation2);
      }, 250);
      setTimeout(() => {
        setPassword(animation3);
      }, 500);

      setTimeout(() => {
        setPassword(password);

        checkPassword();
      }, 800);
    } else {
      alert("Please select at least one option");
    }
  };

  const handleChange = (event) => {
    setLength(event.target.value);
  };
  return (
    <div className="app-container">
      <h1 className=" | text-neutral-500">Password Generator</h1>
      <div className="inner-container">
        <div className="result-div | bg-neutral-700 flex justify-space-between">
          <p className=" | text-neutral-300">{password}</p>
          <div className="result__copy">
            <CopyIcon
              onClick={password === "123456" ? null : copyToClipboard}
              fill={`${password == "123456" ? "#817d92" : "#a4ffaf"}`}
              style={
                password == "123456"
                  ? { cursor: "not-allowed" }
                  : { cursor: "pointer" }
              }
            />
          </div>
        </div>
        <div className="main-container | bg-neutral-700">
          <div className="length-div">
            <p className=" | text-neutral-300">Character Length</p>
            <label className=" | text-strong ">{length}</label>
          </div>
          <div className="length__slider-div">
            <PasswordSlider
              defaultValue={10}
              max={20}
              min={5}
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="include-div">
            <div className="include__item-div">
              <Checkbox
                icon={
                  <div
                    style={{
                      backgroundColor: "#A4FFAF",
                      display: "flex",
                      flex: 1,
                      alignSelf: "stretch",
                    }}
                  >
                    <img src={check} alt="check" style={{ width: 20 }} />
                  </div>
                }
                checked={false}
                onChange={() => setUppercaseIncluded(!uppercaseIncluded)}
                borderWidth={3}
                borderColor="#a4ffaf"
                size={25}
                style={{ cursor: "pointer" }}
                label={"Include Uppercase Letters"}
                labelStyle={{ marginLeft: 20, color: "#e6e5ea" }}
              />
            </div>
            <div className="include__item-div">
              <Checkbox
                icon={
                  <div
                    style={{
                      backgroundColor: "#A4FFAF",
                      display: "flex",
                      flex: 1,
                      alignSelf: "stretch",
                    }}
                  >
                    <img src={check} alt="check" style={{ width: 20 }} />
                  </div>
                }
                checked={false}
                onChange={() => setLowerCaseIncluded(!lowerCaseIncluded)}
                borderColor="#A4FFAF"
                borderWidth={3}
                size={25}
                style={{ cursor: "pointer" }}
                label={"Include Lowercase Letters"}
                labelStyle={{ marginLeft: 20, color: "#e6e5ea" }}
              />
            </div>
            <div className="include__item-div">
              <Checkbox
                icon={
                  <div
                    style={{
                      backgroundColor: "#A4FFAF",
                      display: "flex",
                      flex: 1,
                      alignSelf: "stretch",
                    }}
                  >
                    <img src={check} alt="check" style={{ width: 20 }} />
                  </div>
                }
                checked={false}
                onChange={() => setNumbersIncluded(!numbersIncluded)}
                borderColor="#A4FFAF"
                borderWidth={3}
                size={25}
                style={{ cursor: "pointer" }}
                label={"Include Numbers"}
                labelStyle={{ marginLeft: 20, color: "#e6e5ea" }}
              />
            </div>
            <div className="include__item-div">
              <Checkbox
                icon={
                  <div
                    style={{
                      backgroundColor: "#A4FFAF",
                      display: "flex",
                      flex: 1,
                      alignSelf: "stretch",
                    }}
                  >
                    <img src={check} alt="check" style={{ width: 20 }} />
                  </div>
                }
                checked={false}
                onChange={() => setSymbolsIncluded(!symbolsIncluded)}
                borderColor="#A4FFAF"
                borderWidth={3}
                size={25}
                style={{ cursor: "pointer" }}
                label={"Include Symbols"}
                labelStyle={{ marginLeft: 20, color: "#e6e5ea" }}
              />
            </div>
          </div>
          <div className="strength-div | | bg-neutral-800 flex items-center ">
            <p className="strength-heading">Strength</p>
            <div className="strength__result__item-div | flex items-center ">
              <p className="strength__result-p | text-neutral-100">
                {passwordStrength}
              </p>
              <div className="result__items | flex">
                {passwordStrength == "unknown" && (
                  <>
                    <div className="block result__too-weak"></div>

                    <div className="block result__weak"></div>
                    <div className="block result__medium"></div>
                    <div className="block result__strong"></div>
                  </>
                )}

                {passwordStrength == "too weak" && (
                  <>
                    <div className="block result__too-weak"></div>
                    <div className="block result__empty"></div>
                    <div className="block result__empty"></div>
                    <div className="block result__empty"></div>
                  </>
                )}

                {passwordStrength == "weak" && (
                  <>
                    <div className="block result__weak"></div>
                    <div className="block result__weak"></div>
                    <div className="block result__empty"></div>
                    <div className="block result__empty"></div>
                  </>
                )}
                {passwordStrength == "medium" && (
                  <>
                    <div className="block result__medium"></div>
                    <div className="block result__medium"></div>
                    <div className="block result__medium"></div>
                    <div className="block result__empty"></div>
                  </>
                )}
                {passwordStrength == "strong" && (
                  <>
                    <div className="block result__strong"></div>
                    <div className="block result__strong"></div>
                    <div className="block result__strong"></div>
                    <div className="block result__strong"></div>
                  </>
                )}
              </div>
            </div>
          </div>
          <div
            className="generate-div | text-strong"
            onClick={() => generatePassword()}
          >
            GENERATE <ArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
