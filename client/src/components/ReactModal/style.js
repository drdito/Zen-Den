import React from 'react';

const Style = () => {
  const backdropStyles = {
    base: {
      background: 'rgba(0, 0, 0, .7)',
      opacity: 0,
      visibility: 'hidden',
      transition: 'all 0.4s',
      overflowX: 'hidden',
      overflowY: 'auto'
    },
    open: {
      opacity: 1,
      visibility: 'visible'
    }
  };
   
  const dialogStyles = {
    base: {
      top: -600,
      transition: 'top 0.4s'
    },
    open: {
      top: 0
    }
  }
}

export default Style;