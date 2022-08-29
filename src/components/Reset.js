const Reset = (props) => {
  const handleReset = (event) => {
    event.preventDefault();
    props.handleFilterByCharacter('');
    props.handleFilterByHouse('Gryffindor');
    props.handleDetailUrl('');
  };
  return (
    <button className="btn-reset" onClick={handleReset}>
    <i class="fa-solid fa-broom-ball"></i>
        Reset
    </button>
  );
};

export default Reset;