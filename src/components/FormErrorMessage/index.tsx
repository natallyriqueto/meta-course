import "./styles.css";

interface FormErrorProps {
    message: any;
}

export function FormErrorMessage({ message }: FormErrorProps) {
    return (
        <span className="errorMessage">{message}</span>
    )
}