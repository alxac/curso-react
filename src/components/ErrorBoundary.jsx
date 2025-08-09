import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error) {
    // Você pode logar o erro em um serviço externo aqui
    if (this.props.onError) {
      this.props.onError(error.message);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6 text-center text-red-700 bg-red-100 rounded">
          <h2 className="font-bold text-lg mb-2">
            Ocorreu um erro inesperado.
          </h2>
          <p>{this.state.error && this.state.error.toString()}</p>
          <button
            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
            onClick={() => window.location.reload()}
          >
            Recarregar página
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
