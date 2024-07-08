import React from 'react';

function MainContent({ isOpen }) {
  return (
    <main className={`${isOpen ? 'mt-64' : 'mt-16'} transition-all duration-300 ease-in-out`}>
    </main>
  );
}

export default MainContent;
