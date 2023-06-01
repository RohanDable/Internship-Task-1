import React, { useEffect, useState } from "react";
import { AiFillHome, AiOutlineMessage, AiOutlineSetting } from "react-icons/ai";
import { RiSearchLine, RiAccountCircleLine } from "react-icons/ri";
import Top from "./components/Top.js";
import Top2 from "./components/Top2.js";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setBackendData(data);
      });
  }, []);

  return (
    <div className="container">
      <header style={headerStyle} className="d-flex justify-content-end">
        <RiSearchLine style={iconStyle} />
        <RiAccountCircleLine style={iconStyle} />
      </header>
      <div>
        <Top />
        <Top2 />
      </div>
      {typeof backendData.users === "undefined" ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((user, i) => (
          <div
            key={i}
            className="card mb-3"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <p className="card-text" style={teamStyle}>
                  {user.Team}
                </p>
                <p className="card-text" style={nameStyle}>
                  {user.Name}
                </p>
              </div>
              <p className="card-text" style={runRateStyle}>
                Run Rate: {user.RunRate}
              </p>
            </div>
          </div>
        ))
      )}
      <footer style={footerStyle} className="fixed-bottom bg-light">
        <AiFillHome style={iconStyle} />
        <AiOutlineMessage style={iconStyle} />
        <AiOutlineSetting style={iconStyle} />
      </footer>
    </div>
  );
};

const teamStyle = {
  fontSize: "18px",
  fontWeight: "bold",
};

const nameStyle = {
  fontSize: "16px",
  marginBottom: "5px",
};

const runRateStyle = {
  fontSize: "16px",
  fontWeight: "bold",
};

const headerStyle = {
  padding: "10px",
  marginRight: "20px",
};

const footerStyle = {
  display: "flex",
  justifyContent: "space-around",
  padding: "20px",
};

const iconStyle = {
  fontSize: "24px",
};

export default App;
