export default function Modal({
    isOpen,
    onClose,
    title = "",
    children,
    variant = "default",
    width = "500px",
    height = "auto",
    className = "",
    ...props
  }) {

    const variantStyles = {
        default: {
          backgroundColor: "var(--modal-default-bg)",
          color: "var(--modal-default-text)",
          borderRadius: "var(--border-radius-md)",
        },
        dark: {
          backgroundColor: "var(--modal-dark-bg)",
          color: "var(--modal-dark-text)",
          borderRadius: "var(--border-radius-md)",
        },
        rounded: {
          backgroundColor: "var(--modal-rounded-bg)",
          color: "var(--modal-rounded-text)",
          borderRadius: "var(--border-radius-lg)",
        },
      };
       if (!isOpen) return null;

       return(
        <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000,
        }}
        onClick={onClose} 
      >
        <div
          className={`${className}`}
          style={{
            ...variantStyles[variant],
            width: width,
            height: height,
            padding: "20px",
            position: "relative",
            zIndex: 1001,
          }}
          onClick={(e) => e.stopPropagation()} 
          {...props}
        >
          {children}
        </div>
      </div>
       )
  }