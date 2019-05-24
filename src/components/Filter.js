import Component from './Component.js';

class Filter extends Component {

    render() {
        const dom = this.renderDOM();
        const input = dom.querySelector('input');
        input.addEventListener('input', () => {
            this.props.onFilter({
                text: input.value
            });
        });
        return dom;
    }

    renderTemplate() {
        return /*html*/ `
            <section class="filter-section">
            <label>Filter:
                <input class="filter" name="filter" type="text">
            </label>
            </section>
        `;
    }
}

export default Filter;