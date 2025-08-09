import { createContext, useState } from 'react';

const ErrorContext = createContext();

export function ErrorProvider({ children }) {
  const [error, setError] = useState(null);

  const showError = (msg) => setError(msg);
  const clearError = () => setError(null);

  return (
    <ErrorContext.Provider value={{ error, showError, clearError }}>
      {children}
      {error && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded shadow-lg z-50">
          {error}
          <button className="ml-4 text-white font-bold" onClick={clearError}>×</button>
        </div>
      )}
    </ErrorContext.Provider>
  );
}

export { ErrorContext };
