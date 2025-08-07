import React from 'react';
import { Settings, CheckSquare, Square } from 'lucide-react';
import type { CaseType } from '../../types';


interface FormatSelectorProps {
  availableFormats: CaseType[];
  selectedFormats: string[];
  onFormatToggle: (formatId: string) => void;
  onSelectAll: () => void;
  onClearAll: () => void;
}

const FormatSelector: React.FC<FormatSelectorProps> = ({
  availableFormats,
  selectedFormats,
  onFormatToggle,
  onSelectAll,
  onClearAll
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div className="mb-8">
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center gap-3">
            <Settings className="w-5 h-5 text-gray-600" />
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">Format Selection</h3>
              <p className="text-sm text-gray-500">
                {selectedFormats.length} of {availableFormats.length} formats selected
              </p>
            </div>
          </div>
          <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </button>

        {isExpanded && (
          <div className="border-t border-gray-100 p-6">
            <div className="flex gap-3 mb-4">
              <button
                onClick={onSelectAll}
                className="px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-200"
              >
                Select All
              </button>
              <button
                onClick={onClearAll}
                className="px-3 py-2 text-sm bg-gray-50 text-gray-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Clear All
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableFormats.map((format) => {
                const isSelected = selectedFormats.includes(format.id);
                return (
                  <label
                    key={format.id}
                    className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                      isSelected 
                        ? 'bg-blue-50 border border-blue-200' 
                        : 'bg-gray-50 border border-transparent hover:bg-gray-100'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isSelected ? (
                        <CheckSquare className="w-4 h-4 text-blue-600" />
                      ) : (
                        <Square className="w-4 h-4 text-gray-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className={`font-medium text-sm ${isSelected ? 'text-blue-900' : 'text-gray-900'}`}>
                        {format.name}
                      </div>
                      <div className={`text-xs ${isSelected ? 'text-blue-600' : 'text-gray-500'}`}>
                        {format.description}
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onFormatToggle(format.id)}
                      className="sr-only"
                    />
                  </label>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormatSelector;