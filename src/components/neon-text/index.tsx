
import './style.css'

const NeonText = (props: any) => {
    const { text, className, ...restProps } = props;

    const animatedClassname = `bg-transparent ${className}`;

    return (
        <div className={animatedClassname}>
            <div className="neon">
                <h3>{text}</h3>
            </div>
        </div>
    );
}

export default NeonText;