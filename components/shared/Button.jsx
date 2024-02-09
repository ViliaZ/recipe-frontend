const Button = ({ text, textStyles, onClick }) => {
  return (
    <button type="button" onClick={onClick} className={`${textStyles}`}>
      {text}
    </button>
  );
};

export default Button;
