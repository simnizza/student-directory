function Button({label, variant = "primary", ...rest }) {
    return (
        <button className={`btn btn-${variant}`} {...rest}>
            {label}
        </button>
    );
}

export default Button;