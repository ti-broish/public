import React, { useState } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import MobileAppInstructions from './instructions/MobileAppInstructions';
import VoteGuardians from './instructions/VoteGuardians';
import HowToValidate from './instructions/HowToValidate';
import WatcherInstructions from './instructions/WatcherInstructions';
import WhatToWatchForInstructions from './instructions/WhatToWatchForInstructions';
import InstructionsIndex from './instructions/InstructionsIndex';
import HowToTakePhotos from './instructions/HowToTakePhotos'
import {
    InstructionsLayout,
    Sidebar,
    SidebarLink,
    InstructionsContent,
    MobileMenuToggle,
} from './instructions/InstructionStyles';

const sections = [
    // { to: '/instructions', label: 'Всички инструкции' },
    { to: '/instructions/what-to-watch-for', label: 'Как протича изборния ден' , exact: true  },
    { to: '/instructions/mobile-app', label: 'Изпращане на протоколи и сигнали' },
    // { to: '/instructions/how-to-validate', label: 'Валидиране на протокол' },
        // { to: '/instructions/guardians', label: 'Какво правят защитниците на вота' },
    // { to: '/instructions/watchers', label: 'Участниците в "Ти Броиш"' },
    // { to: '/instructions/capturing-results', label: 'Как да заснемем процеса на установяване на резултатите"' },
];

export default props => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return(
        <InstructionsLayout>
            {/* <MobileMenuToggle style={{width: '48px' }} onClick={() => setMenuOpen(!menuOpen)} >
                <FontAwesomeIcon icon={menuOpen ? faTimes : faBars}  hidden={true} />
            </MobileMenuToggle>
            <Sidebar open={menuOpen}>
                {sections.map((s) => (
                    <SidebarLink key={s.to} to={s.to} exact={s.exact} onClick={handleLinkClick}>
                        {s.label}
                    </SidebarLink>
                ))}
            </Sidebar> */}
            <InstructionsContent>
                <Switch>
                    <Route exact path='/instructions/what-to-watch-for' component={WhatToWatchForInstructions}/>
                    <Route path='/instructions/mobile-app' component={MobileAppInstructions}/>
                    {/* <Route path='/instructions/how-to-validate' component={HowToValidate}/> */}
                    {/* <Route path='/instructions/guardians' component={VoteGuardians}/> */}
                    {/* <Route path='/instructions/watchers' component={WatcherInstructions}/> */}
                    {/* <Route path='/instructions/capturing-results' component={HowToTakePhotos}/> */}
                    {/* <Route exact path='/instructions' component={InstructionsIndex}/> */}
                    <Redirect to='/instructions/what-to-watch-for'/>
                </Switch>
            </InstructionsContent>
        </InstructionsLayout>
    );
};
