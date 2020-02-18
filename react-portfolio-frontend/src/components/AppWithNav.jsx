import React from 'react';


import NavbarHeader from './NavBarHeader/NavBarHeader';


export default ({ children  }) => {
    return (
        <div>
<NavbarHeader/>
    {children}
    </div>
);
}
