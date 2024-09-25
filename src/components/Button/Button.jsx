import './Button.css';

const Button = ({ link, text }) => {
  return (
    <a href={link} className="btn btn-3 hover-border-3 font-mono text-[0.5rem] mt-5 bg-sky-950">
      <span>{text}</span>
    </a>
  );
};

export default Button;
