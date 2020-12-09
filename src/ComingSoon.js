import React from 'react';

export default props => {
    return(
        <div style={{
            backgroundColor: '#eee',
            width: '100vw',
            height: '100vh',
            position: 'absolute',
            overflow: 'hidden',
        }}>
            <img style={{
                width: '60vw',
                margin: '0 auto',
                marginTop: '18vh',
                display: 'block',

            }} src='/logo_horizontal.png'/>
            <h1 style={{
                textAlign: 'center',
                fontWeight: 'bold',
            }}>
                Очаквайте скоро
            </h1>
        </div>
    )
};