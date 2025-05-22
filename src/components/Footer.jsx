import React from "react";
import "../styles/theme.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} TricolorPaulista - Não oficial, sem vínculo com o SPFC.
    </footer>
  );
}
