
import React from 'react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="w-full max-w-4xl bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 text-red-800 p-8 rounded-2xl shadow-lg relative overflow-hidden" role="alert">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-red-200/30 rounded-full -translate-y-10 translate-x-10"></div>
      
      <div className="relative z-10 flex items-start">
        <div className="flex-shrink-0 w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mr-4 shadow-lg">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">Oops! Something went wrong</h3>
          <p className="text-red-700 leading-relaxed">{message}</p>
          <div className="mt-4 p-4 bg-white/50 rounded-lg border border-red-200">
            <p className="text-sm text-red-600">
              💡 <strong>Tip:</strong> Make sure your Gemini API key is properly configured in your .env file.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorDisplay;
