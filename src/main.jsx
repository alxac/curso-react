import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ErrorProvider } from './context/ErrorContext';
import ErrorBoundary from './components/ErrorBoundary';
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import './i18n';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorProvider>
      <ErrorBoundary>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
        </I18nextProvider>
      </ErrorBoundary>
    </ErrorProvider>
  </StrictMode>
);
