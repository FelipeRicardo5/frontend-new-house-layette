export default function Input({ value, nome, type = "text", placeholder, customStyles, label, isTextarea, onChange }) {
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
            className="text-black font-normal border border-gray-300 rounded-[10px] p-2 resize-none outline-none"
            onChange={onChange}
          />
        ) : (
          <input
            id={nome}
            name={nome}
            value={value}
            type={type}
            placeholder={placeholder}
            className={`text-black font-normal border border-gray-300 rounded-[10px] p-2 h-ful outline-none ${customStyles}`}
            onChange={onChange}
          />
        )}
      </div>
    );
  }
  