import './styles/main.scss';
import { render, h } from 'preact';

/** @jsx h */

const App = () => {
    return (
        <div>
            <p>Hello, Preact!</p>
        </div>
    );
};

render(<App />, document.body);
