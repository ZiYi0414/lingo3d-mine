import "./index.css";

const Preload = ({ progress }) => {
  return (
    <div
      className="preload"
      style={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        left: 0,
        top: 0,
        background: "#34495e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#ecf0f1",
        fontSize: 25,
      }}
    >
      垃圾代码正在加载... {Math.round(progress)}%
    </div>
  );
};

export default Preload;
