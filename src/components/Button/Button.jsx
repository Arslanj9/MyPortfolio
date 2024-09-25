import './Button.css';

const Button = ({ link, text }) => {
  return (
    <a href={link} className="btn btn-3 hover-border-3">
      <span>{text}</span>
    </a>
  );
};

export default Button;
