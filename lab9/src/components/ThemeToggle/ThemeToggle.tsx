import { useTheme } from '../../context/ThemeContext';
import ToggleControl from '../ToggleControl/ToggleControl';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="flex items-center gap-2">
            <ToggleControl
                checked={isDark}
                onChange={toggleTheme}
                label={isDark ? 'Темна тема' : 'Світла тема'}
                size="md"
            />
        </div>
    );
}
