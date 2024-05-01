import "./style.css";

const GlitchText = (props: any) => {
  const { text, className, ...restProps } = props;

  const animatedClassname = `glitch-text ${className}`;

  return (
    <div className={animatedClassname} title={text} {...restProps}>
      {text}
    </div>
  );
};

export default GlitchText;
