import React from "react";

const Top2 = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          lineHeight: "10vh",
          padding: "20px",
        }}
      >
        <div>
          <h6>🟣🔵</h6>
        </div>
      </div>

      <h1 style={{ marginLeft: "20px" }}>Top Movers</h1>

      <div style={containerStyle}>
        <div style={squareStyle}>
          <h2>Rishabh Pant</h2>
          <h3>🖐️|DC</h3>
          <h3>43.04 (+72.84%)</h3>
        </div>

        <div style={squareStyle}>
          <h2>Venkatesh Iyer</h2>
          <h3>🏏|KKR</h3>
          <h3>49.64 (+82.64%)</h3>
        </div>

        <div style={squareStyle}>
          <h2>Jadeja</h2>
          <h3>🏏|CSK</h3>
          <h3>46.04 (+78.34%)</h3>
        </div>
      </div>

      <h1 style={{ marginLeft: "20px" }}>All Lists</h1>

      <div style={buttonContainer}>
        <button style={buttonStyle}>Trending</button>
        <button style={buttonStyle}>New Players</button>
      </div>
    </div>
  );
};

const containerStyle = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

const squareStyle = {
  flex: "1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "300px",
  height: "200px",
  border: "1px solid black",
  borderRadius: "10px",
  margin: "10px",
  padding: "10px",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "center",
};

const buttonStyle = {
  borderRadius: "20px",
  padding: "10px 20px",
  margin: "5px",
  background: "violet",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  fontWeight: "bold",
  fontSize: "14px",
};

export default Top2;
