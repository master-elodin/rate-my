import './Header.css';
import * as React from 'react';

const Header = () => {
  const [search, setSearch] = React.useState();

  return (
    <header className={'header'}>
      <div>
        Rate My Show
      </div>
      <div className={'header__search-container'}>
        <input value={search} placeholder={'Search...'} onChange={e => setSearch(e.target.value)} />
      </div>
    </header>
  );
}

export default Header;