import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import ErrorBoundary from '@/components/error-boundary';
import { Router } from '@/config/routes';

const queryClient = new QueryClient();

function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;
