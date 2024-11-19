import { useState , useEffect } from "react";
export default function Modal({
  isOpen,
  onClose,
  width = "500px",
  height = "auto",
  position = "center",
  closeOnOverlayClick = true,
  showCloseIcon = true,
  style = {},
  animationDuration = 300,
  className = "",
  ...props
}) {
  const [visible, setVisible] = useState(isOpen);

  useEffect(()=> {
    if(isOpen) {
        setVisible(true);
    }else{
      setTimeout(()=> setVisible(false),animationDuration);
    }
  }, [isOpen, animationDuration]);

  if (!visible) return null;

  const positionStyles = {
    center: { justifyContent: "center", alignItems: "center" },
    top: { justifyContent: "center", alignItems: "flex-start" },
    bottom: { justifyContent: "center", alignItems: "flex-end" },
    left: { justifyContent: "flex-start", alignItems: "center" },
    right: { justifyContent: "flex-end", alignItems: "center" },
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: isOpen ? "flex" : "none",
        ...positionStyles[position],
        zIndex: 1000,
        transition: `opacity ${animationDuration}ms ease-in-out`,
        opacity: isOpen ? 1 : 0,
      }}
      onClick={closeOnOverlayClick ? onClose : null}
    >
      <div
        className={`${className}`}
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          width: width,
          height: height,
          padding: "20px",
          position: "relative",
          zIndex: 1001,
          ...style,
        }}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {props.children}
        {showCloseIcon && (
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              border: "none",
              background: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "red",
            }}
          >
            X
          </button>
        )}
      </div>
    </div>
  );
}
