import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
        <header>
            <h1>MY TO DO LIST</h1>
        </header>
        `;
    }
}

export default Header;