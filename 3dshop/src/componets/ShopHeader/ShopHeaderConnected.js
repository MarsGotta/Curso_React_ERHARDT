import { useContext } from 'react';
import { ThemeContext } from '../../core/theme-context';

import ShopHeader from './ShopHeader'

function ShopHeaderConnected({ changeTheme }) {
    const contextTheme = useContext(ThemeContext)
    return (
        <ShopHeader changeTheme={changeTheme} theme={contextTheme} />
    );
}

export default ShopHeaderConnected;
