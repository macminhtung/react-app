import { createRoot } from 'react-dom/client';
import AppRouter from '@/app-router';
import '@/main.css';
import '@/i18next/i18n';

createRoot(document.getElementById('root')!).render(<AppRouter />);
