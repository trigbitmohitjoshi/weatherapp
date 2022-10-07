import React, { useEffect } from "react";
function VerticalSpacer({ space }) {
  const spacerRef = React.createRef();
  useEffect(() => {
    spacerRef.current.style.marginTop = space;
  }, []);

  return <span ref={spacerRef} />;
}

export default VerticalSpacer;
