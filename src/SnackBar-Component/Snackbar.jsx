import { useEffect, useState } from "react"

export default function SnackBar({
    message="",
    severity="",
    position={vertical:"bottom" , horizontal:"center"},
    autoHideDuration=3000,
    showCloseButton=true,
    onClose = ()=>{},
    isOpen = false,

}){
    const [visible , setVisible] = useState(isOpen);

    useEffect(() => {
        setVisible(isOpen); 
      }, [isOpen]);

    useEffect(()=>{
        if(visible && autoHideDuration){
            const timer = setTimeout(()=>{
                handleClose()
            },autoHideDuration);
            return ()=> clearTimeout(timer);
        }
    },[visible , autoHideDuration])

    const handleClose = ()=>{
        setVisible(false);
        onClose();
    }

    const severityStyles = {
        success : {backgroundColor: "green", color: "white"},
        info : {backgroundColor: "blue", color: "white"},
        warning : {backgroundColor: "orange", color: "white"},
        error : {backgroundColor: "red", color: "white"},
    }

    const positionStyles = {
        top: { top: "20px" },
        bottom: { bottom: "20px" },
        left: { left: "20px" },
        center: { top: "20px", left: "50%", transform: "translateX(-50%)" },
        right: { right: "20px" },
    }

    const combinedPositionStyle= {
        ...positionStyles[position.vertical],
        ...positionStyles[position.horizontal],
        position: "fixed",
        zIndex: 1000,
      };

    return(
        visible ? (
            <div
              style={{
                ...severityStyles[severity],
                ...combinedPositionStyle,
                padding: "10px 20px",
                borderRadius: "5px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                fontSize: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minWidth: "250px",
                maxWidth: "400px",
                minHeight:"50px",
                maxHeight:"50px",
              }}
            >
              <span>{message}</span>
              {showCloseButton && (
                <button
                  onClick={handleClose}
                  style={{
                    marginLeft: "10px",
                    backgroundColor: "transparent",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "16px",
                  }}
                >
                  ✖
                </button>
              )}
            </div>
          ) : null 
    )
}