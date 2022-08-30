const Reset = (props) => {
  const handleReset = (event) => {
    event.preventDefault();
    props.handleFilterByCharacter('');
    props.handleFilterByHouse('Gryffindor');
    props.handleFilterByGender('all');
    
    
  };
  return (
    <button className="btn-reset" onClick={handleReset}>
    <i className="fa-solid fa-broom-ball"></i>
        Reset
    </button>
  );
};

export default Reset;