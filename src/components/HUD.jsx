import { useEffect, useState } from "react";

export default function HUD() {
  const [t, setT] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setT(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="hud hud--top position-fixed top-0 start-0 end-0 d-flex justify-content-between align-items-center text-uppercase user-select-none pe-none">
        <div>
          <span className="dot d-inline-block rounded-circle me-2"></span>
          MR<span className="magenta">_</span>99 <span className="sep">|</span>{" "}
          OPERATOR-PROFILE
        </div>
        <div className="d-none d-md-block">
          NODE <span className="cyan">CDMX-01</span>{" "}
          <span className="sep">|</span>{" "}
          {t.toISOString().slice(0, 19).replace("T", " ")}Z{" "}
          <span className="sep">|</span> v4.2.0
        </div>
      </div>
      <div className="hud hud--bottom position-fixed bottom-0 start-0 end-0 d-flex justify-content-between align-items-center text-uppercase user-select-none pe-none">
        <div>© 2026 MIGUEL RICHTER</div>
      </div>
    </>
  );
}
