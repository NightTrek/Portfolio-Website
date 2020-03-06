import React from 'react';


import NavbarHeader from './NavBarHeader/NavBarHeader';


export default ({ children  }) => {
    return (
        <div>
<NavbarHeader/>
    {children}
            Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
    </div>
);
}
