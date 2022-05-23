import React, { useState } from 'react';

function LoginFooter() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div className='loginFooter clearfix'>
       <p>© 2022 <span>Sanutanu</span> All rights reserved.</p>
    </div>
  );
}

export default LoginFooter; 