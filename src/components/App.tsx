import { useSelector } from 'react-redux';
import { Router } from '.';
import { RootState } from '../redux/store';

export function App() {
  const theme = useSelector(
    (state: RootState) => state.toggleDisplay.value,
  );

  return (
    <div className="container-app" data-theme={theme}>
      <Router />
    </div>
  );
}
