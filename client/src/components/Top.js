import React from "react";

function Top() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "30vh",
        background: "darkmagenta",
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        width: "90%",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h2 style={{ color: "white", marginBottom: "20px" }}>
          Win BIG with Fantasy Stocks
        </h2>

        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <li style={{ color: "white", marginBottom: "10px" }}>
            <h3 style={{ margin: "0" }}>🟡 Analyze and buy players</h3>
          </li>
          <li style={{ color: "white", marginBottom: "10px" }}>
            <h3 style={{ margin: "0" }}>🟡 Build a portfolio of 4 players</h3>
          </li>
          <li style={{ color: "white", marginBottom: "10px" }}>
            <h3 style={{ margin: "0" }}>🟡 Sell high and cash in!</h3>
          </li>
        </ul>
      </div>

     

      <img
        src="https://www.nicepng.com/png/detail/26-262122_money-bag-with-dollar-sign-money-bag-euro.png"
        alt="Money Bag"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          width: "40px",
          height: "40px",
        }}
      />
    </div>
  );
}

export default Top;
