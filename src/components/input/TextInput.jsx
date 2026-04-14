const TextInput = ({ isDarkMode, value, handleInputChange, textarea, lable }) => {
  const InputComponent = textarea ? "textarea" : "input";

  return (
    <div className="relative">
      <InputComponent
        id={lable}
        {...(!textarea && { type: "text" })}
        className={`w-full px-4 pt-6 pb-2 border rounded-xl transition-all duration-300 outline-none resize-none ${
          isDarkMode
            ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800/70"
            : "bg-white/50 border-gray-300 text-gray-900 focus:border-blue-500 focus:bg-white"
        }`}
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
      />

      <label
        htmlFor={lable}
        className="text-sm absolute left-4 top-2 pointer-events-none origin-left"
      >
        {lable}
      </label>
    </div>
  );
};

export default TextInput