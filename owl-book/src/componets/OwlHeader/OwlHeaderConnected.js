import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../../core/theme-context';
import OwlNav from '../OwlNav/OwlNav'
import OwlInputSearch from '../OwlInputSearch/OwlInputSearch'
import OwlIconButton from '../OwlIconButton/OwlIconButton'

import OwlHeader from './OwlHeader'

function OwlHeaderConnected({ changeTheme }) {
    const [showNav, setShowNav] = useState(false)
    const [showSearch, setSearch] = useState(false)
    const { showHeaderSearch } = useSelector(store => store);
    const history = useHistory();

    function handleShowNav() {
        setSearch(false);
        setShowNav(!showNav);
    }

    function handleSearch() {
        setShowNav(false);
        setSearch(!showSearch);
    }

    function navigateSearch(value) {
        history.push(`/search/${value}`)
    }

    const renderSearch = !showNav && showSearch && <OwlInputSearch onClick={navigateSearch} />;
    const renderNav = showNav && !showSearch && <OwlNav />;
    const contextTheme = useContext(ThemeContext)
    return (
        <OwlHeader
            left={<OwlIconButton name="bar" onClick={handleShowNav} />}
            right={(
                <div className="owl-header-button-search-box">
                    <button className="owl-header-theme-button" onClick={changeTheme}>
                        {contextTheme === "dark-theme" ? 'Light' : 'Dark'}
                    </button>
                    {showHeaderSearch && <OwlIconButton name="search" onClick={handleSearch} />}
                </div>
            )}
            bottom={renderNav || (showHeaderSearch && renderSearch)}
        />
    );
}

export default OwlHeaderConnected;
