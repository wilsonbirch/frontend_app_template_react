// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { light, dark } from '../redux/features/toggleTheme';

export function Header() {
  const display = useSelector(
    (state: RootState) => state.toggleDisplay.value,
  );
  const toggleDisplay = useDispatch();

  return (
    <header>
      <button
        onClick={() =>
          display === 'dark'
            ? toggleDisplay(light())
            : toggleDisplay(dark())
        }
      >
        {display}
      </button>
    </header>
  );
}
