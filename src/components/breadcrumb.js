import React from 'react';

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <p style={Styles.breadcrumb}>PORTFOLIO BY TYPE:</p>
    </div>
  );
}

const Styles = {
  breadcrumb: {
    fontSize: "3vh"
  }
}
export default Breadcrumb;