export default function Input({ value, nome, type = "text", placeholder, customStyles, label, isTextarea }) {
    return (
      <div className={`flex flex-col gap-2 text-black p-2 rounded ${customStyles}`}>
        <label htmlFor={nome} className="text-lg text-start font-semibold">
          {label}
        </label>
        {isTextarea ? (
          <textarea
            id={nome}
            name={nome}
            value={value}
            placeholder={placeholder}
            rows={6}
            className="text-black font-normal border border-gray-400 rounded-[10px] p-2 resize-none outline-none"
          />
        ) : (
          <input
            id={nome}
            name={nome}
            value={value}
            type={type}
            placeholder={placeholder}
            className="text-black font-normal border border-gray-400 rounded-[10px] p-2 h-12 outline-none"
          />
        )}
      </div>
    );
  }
  