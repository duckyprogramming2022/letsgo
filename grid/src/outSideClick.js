const outSideClick = (event, setFormState) => {

  if (event.target.tagName === 'BUTTON' || event.target.firstChild.textContent === 'Merge') {
      return setFormState(true);
    } else {
      return setFormState(false);
  }
}




export default outSideClick;