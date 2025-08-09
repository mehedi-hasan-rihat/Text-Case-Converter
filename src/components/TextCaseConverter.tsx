import React, { useState, useCallback } from 'react';
import { Settings, Sparkles } from 'lucide-react';
import Header from './ui/Header';
import InputSection from './ui/InputSection';
import ConversionCard from './ui/ConversionCard';
import FormatSelector from './ui/FormatSelector';

import useCopyToClipboard from '../hooks/useCopyToClipboard';
import { caseTypes } from '../constants/caseTypes';

/**
 * TextCaseConverter is a React component that renders a text case converter
 * app. The component renders a header, input section, format selector, and
 * conversion cards for the selected formats. The user can input text, select
 * formats, copy the converted text, and see the converted results.
 *
 * The component is a functional component that uses the `useState` and
 * `useCallback` hooks from React. The component also uses the
 * `useCopyToClipboard` hook from the `react-use` library to handle copying the
 * converted text to the clipboard.
 *
 * The component renders a header with a title and a settings icon. The
 * component also renders an input section with a textarea and a button to
 * clear the input. The component renders a format selector with a list of
 * formats and buttons to select all or clear all formats. The component
 * conversion card renders a title, description, and copy button.
 *
 * @returns {React.ReactElement} The TextCaseConverter component.
 */


const TextCaseConverter: React.FC = () => {
    const [inputText, setInputText] = useState<string>('');
    const [selectedFormats, setSelectedFormats] = useState<string[]>(
        caseTypes.map(type => type.id) // Start with all formats selected
    );
    const { copy, copiedId } = useCopyToClipboard();

    const handleInputChange = useCallback((text: string) => {
        setInputText(text);
    }, []);

    const handleCopy = useCallback((text: string , id: string) => {
        if (text.trim()) {
            copy(text, id);
        }else if(!text.trim()){
            alert("Nothing to Copy")
        }
    }, [copy]);

    const handleFormatToggle = useCallback((formatId: string) => {
        setSelectedFormats(prev =>
            prev.includes(formatId)? prev.filter(id => id !== formatId) : [...prev, formatId]
        );
    }, []);

    const handleSelectAll = useCallback(() => {
        setSelectedFormats(caseTypes.map(type => type.id));
    }, []);

    const handleClearAll = useCallback(() => {
        setSelectedFormats([]);
    }, []);

    // Filter case types based on user selection
    const visibleCaseTypes = caseTypes.filter(type =>
        selectedFormats.includes(type.id)
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="container mx-auto px-4 py-12 max-w-6xl">
                <Header />
                <InputSection inputText={inputText} onInputChange={handleInputChange} />

                <FormatSelector
                    availableFormats={caseTypes}
                    selectedFormats={selectedFormats}
                    onFormatToggle={handleFormatToggle}
                    onSelectAll={handleSelectAll}
                    onClearAll={handleClearAll}
                />

                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <Sparkles className="w-5 h-5 text-purple-600" />
                        <h2 className="text-xl font-semibold text-gray-900">
                            Converted Results
                        </h2>
                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {visibleCaseTypes.length} format{visibleCaseTypes.length == 1 || visibleCaseTypes.length == 0 ? '' : 's'}
                        </span>
                    </div>

                    {visibleCaseTypes.length === 0 ? (
                        <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                            <div className="text-gray-400 mb-2">
                                <Settings className="w-12 h-12 mx-auto mb-3" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">No formats selected</h3>
                            <p className="text-gray-500">Choose at least one format to see conversions</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {visibleCaseTypes.map((caseType) => {
                                const convertedText = inputText ? caseType.converter(inputText) : '';
                                return (
                                    <ConversionCard
                                        key={caseType.id}
                                        caseType={caseType}
                                        convertedText={convertedText}
                                        onCopy={handleCopy}
                                        isCopied={copiedId === caseType.id}
                                    />
                                );
                            })}
                        </div>
                    )}
                </div>

                <footer className="text-center pt-12 border-t border-gray-100">
                    <p className="text-gray-500 text-sm">
                        Developed by Mehedi Hasan Rihat ©
                        {new Date().getFullYear()}
                    </p>
                    <a
                        href="mailto:mehedi6381@gmail.com"
                        className="text-gray-500 text-sm hover:text-purple-600 transition-colors"
                    >
                        mehedi6381@gmail.com
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default TextCaseConverter;