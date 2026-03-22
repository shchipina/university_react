import ToggleControl from '../ToggleControl/ToggleControl';

export type ThemeToggleProps = {
    isDark: boolean;
    onToggle: () => void;
};

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <div className="flex items-center gap-2">
            <ToggleControl
                checked={isDark}
                onChange={() => onToggle()}
                label={isDark ? 'Темна тема' : 'Світла тема'}
                size="md"
            />
        </div>
    );
}
