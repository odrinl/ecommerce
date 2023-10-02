import React, { Component } from 'react';
import FetchError from './FetchError';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error,
      errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // Check if the error is a fetch error
      if (
        this.state.error &&
        this.state.error instanceof TypeError &&
        this.state.error.message.includes('Failed to fetch')
      ) {
        return <FetchError />;
      }

      // Render a general error UI for other types of errors
      return (
        <div className='container'>
          <h1>Something went wrong.</h1>
          <p>{this.state.error && this.state.error.toString()}</p>
          <p>{this.state.errorInfo && this.state.errorInfo.componentStack}</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
