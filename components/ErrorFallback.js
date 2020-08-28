function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className="error-page">
      <p>Something went wrong:</p>

      <pre style={{ color: 'red' }}>{error.message}</pre>

      <button type="button" onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
}
