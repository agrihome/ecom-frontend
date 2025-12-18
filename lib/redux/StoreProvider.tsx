import { Provider } from 'react-redux';
import { makeStore } from './store';

// Create store instance outside component to avoid recreating on every render
const store = makeStore();

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
