import React from "react";
function VerticalSpacer({ space }) {
  const spacerRef = React.createRef();
  React.useEffect(() => {
    spacerRef.current.style.marginTop = space;
  }, [space, spacerRef]);

  return <span ref={spacerRef} />;
}

export default VerticalSpacer;
