import { useContext } from 'react';
import { ThemeContext } from '../../core/theme-context';

import OwlHeader from './OwlHeader'

function OwlHeaderConnected({ changeTheme }) {
    const contextTheme = useContext(ThemeContext)
    return (
        <OwlHeader changeTheme={changeTheme} theme={contextTheme} />
    );
}

export default OwlHeaderConnected;
