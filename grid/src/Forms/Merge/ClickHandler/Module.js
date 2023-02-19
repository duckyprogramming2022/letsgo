const clickHandler = (() => {

  const Outside = (event, setRenderAble) => {
    if (event.target.tagName === 'BUTTON' || event.target.firstChild.textContent === 'Merge') {
      setRenderAble(true);
    } else {
      setRenderAble(false);
    }
  }
  
  const Close = (setRenderBool) => {
    setRenderBool(false);
  }

  return {
    Outside,
    Close
  }
})();



export default clickHandler;