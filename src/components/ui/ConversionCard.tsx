import React from 'react';
import { Copy, Check } from 'lucide-react';
import type { CaseType } from '../../types';

interface ConversionCardProps {
  caseType: CaseType;
  convertedText: string;
  onCopy: (text: string, id: string) => void;
  isCopied: boolean;
}

const ConversionCard: React.FC<ConversionCardProps> = ({ 
  caseType, 
  convertedText, 
  onCopy, 
  isCopied 
}) => (
  <div className="bg-white rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 hover:shadow-lg group">
    <div className="p-6">
      <div className="flex items-center justify-between mb-3">
        <div>
          <h3 className="font-semibold text-gray-900 text-lg">{caseType.name}</h3>
          <p className="text-sm text-gray-500">{caseType.description}</p>
        </div>
        <button
          onClick={() => onCopy(convertedText, caseType.id)}
          className={`p-2 rounded-lg transition-all duration-200 ${
            isCopied 
              ? 'bg-green-100 text-green-600' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 group-hover:bg-blue-50 group-hover:text-blue-600'
          }`}
          title={isCopied ? 'Copied!' : 'Copy to clipboard'}
        >
          {isCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
      <div className="bg-gray-50 rounded-lg p-4 min-h-[60px] border-2 border-dashed border-gray-200">
        <p className="text-gray-800 font-mono text-sm break-all leading-relaxed">
          {convertedText || <span className="text-gray-400 italic">Converted text will appear here</span>}
        </p>
      </div>
    </div>
  </div>
);

export default ConversionCard;