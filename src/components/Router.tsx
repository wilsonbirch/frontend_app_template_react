import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { Header } from '.';

// interface RouterProps {

// }

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}
