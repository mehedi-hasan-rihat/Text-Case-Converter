import React from 'react';

interface InputSectionProps {
  inputText: string;
  onInputChange: (text: string) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ inputText, onInputChange }) => (
  <div className="mb-8">
    <label htmlFor="input-text" className="block text-sm font-semibold text-gray-700 mb-3">
      Enter your text
    </label>
    <div className="relative">
      <textarea
        id="input-text"
        value={inputText}
        onChange={(e) => onInputChange(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl resize-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-200 text-gray-800 placeholder-gray-400"
      />
      <div className="absolute bottom-3 right-3 text-sm text-gray-400">
        {inputText.length} characters
      </div>
    </div>
  </div>
);
export default InputSection;