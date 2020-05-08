import React from 'react';
import Aux from '../../hoc/Auxillary';

const layout = (props) => {
    
    return (
        <Aux>
        <div>Toolbar,SideDrawer,BackDrop</div>
            <main style={{ marginTop: '16px'}}>{props.children}</main>
        </Aux>
    );
};

export default layout;