import React from 'react';

const GrandChild = (props) => {
  const { name, age } = props;

  return (
    <div>
      GrandChild {age}
    </div>
  );
}

export default GrandChild;