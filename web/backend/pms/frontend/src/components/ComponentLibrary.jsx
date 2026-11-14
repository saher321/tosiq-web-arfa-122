
export const InputField = ({
    type = "text",
    hint,
    className = "",
    ...otherProps
}) => {
    return (
        <input
            {...otherProps}
            type={type}
            placeholder={hint}
            className={`
        w-full px-4 py-3
        text-sm text-gray-800
        bg-white
        border border-gray-300
        rounded
        outline-none
        placeholder:text-gray-400
        transition-all duration-200
        hover:border-gray-400
        focus:border-blue-500
        disabled:bg-gray-100
        disabled:cursor-not-allowed
        ${className}
      `}
        />
    );
};


export const ActionButton = ({ text, className, ...otherProps }) => {
    return (

        <button
            {...otherProps}
            type="submit"
            className={`
                cursor-pointer
                w-full
                px-6 py-3
                text-sm font-semibold text-white
                bg-blue-600
                rounded-lg
                shadow-md shadow-blue-600/20
                transition-all duration-200
                hover:bg-blue-700
                hover:shadow-lg hover:shadow-blue-600/30
                active:scale-[0.98]
                focus:outline-none
                focus:ring-4 focus:ring-blue-500/30
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className}
            `}
        >
            {text}
        </button>

    )
}

export const Divider = () => {
    return (
        <div className="p-[1px] rounded-full my-5 bg-gray-200"/>
    )
}