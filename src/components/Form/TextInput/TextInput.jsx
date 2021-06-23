export default function TextInput({
    autoFocus = false,
    name,
    onChange,
    value,
}) {
    return (
        <input
            autoFocus={autoFocus}
            name={name}
            onChange={onChange}
            type="text"
            value={value}
        />
    )
}
