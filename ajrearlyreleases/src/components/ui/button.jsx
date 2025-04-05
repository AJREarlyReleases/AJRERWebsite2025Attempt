export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 rounded-md bg-white text-black font-semibold hover:bg-gray-300 transition ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  