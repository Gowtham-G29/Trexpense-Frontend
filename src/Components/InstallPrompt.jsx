import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const readyForInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true); 
    };
    window.addEventListener("beforeinstallprompt", readyForInstall);

    return () => window.removeEventListener("beforeinstallprompt", readyForInstall);
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("User install choice:", outcome);
      setDeferredPrompt(null);
      setShow(false);
    }
  };

  return (
    show && (
      <button
        onClick={handleInstall}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "12px 20px",
          backgroundColor: "#1976d2",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Install App
      </button>
    )
  );
}
