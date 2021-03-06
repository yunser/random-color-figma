import * as React from 'react';
import '../styles/ui.css';

declare function require(path: string): any;

const App = ({}) => {

    React.useEffect(() => {
        window.onmessage = (event) => {
            console.log('window.onmessage', event.data)
            if (event.data && event.data.pluginMessage) {
                const { type, message } = event.data.pluginMessage
                if (type === 'create-rectangles') {
                }
                else if (type == 'create-json-callback') {
                }
            }
        }
    }, [])

    return (
        <div>
            <img src={require('../assets/logo.svg')} />
            <h2>xxx</h2>
        </div>
    );
};

export default App;
