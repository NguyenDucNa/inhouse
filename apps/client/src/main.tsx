import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { ApolloProvider } from '@apollo/client';
import { AuthProvider } from '@client/module/auth/auth-provider.tsx';
import * as Sentry from '@sentry/react';
import { BrowserTracing, Replay } from '@sentry/react';
import { enableMapSet } from 'immer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { client } from './graphql/client.ts';
import { router } from './app/router.tsx';

// Setup Sentry

const sentryDns: string | null = import.meta.env.VITE_SENTRY_DNS as string;
if (sentryDns) {
  Sentry.init({
    dsn: sentryDns,
    integrations: [new BrowserTracing({}), new Replay()],
    // Performance Monitoring
    tracesSampleRate: import.meta.env.PROD ? 1.0 : 0.2,
    // Session Replay
    replaysSessionSampleRate: import.meta.env.PROD ? 0.1 : 1,
    replaysOnErrorSampleRate: 1.0,
  });
}

// Chart setup
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Immer plugin
enableMapSet();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AuthProvider>
  </React.StrictMode>
);
