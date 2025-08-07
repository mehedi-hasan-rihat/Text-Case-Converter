import React from 'react';
import { Type } from 'lucide-react';

const Header: React.FC = () => (
  <div className="text-center mb-12">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-2xl">
        <Type className="w-8 h-8 text-white" />
      </div>
    </div>
    <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
      Text Case Converter
    </h1>
    <p className="text-gray-600 text-lg">
      Transform your text into any case format instantly
    </p>
  </div>
);

export default Header;