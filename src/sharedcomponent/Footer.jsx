import React, { useState } from 'react';

function Footer() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className="dashFooter">
      <p className="text-light">© 2022 <span>Sanutanu</span> All rights reserved.</p>
    </div>
  );
} 

export default Footer;