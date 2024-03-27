import "./styles.css";

interface buttonProps {
    text: string;
} 

export function Button({ text } :buttonProps) {
    return <button className="btn">{text}</button>
}