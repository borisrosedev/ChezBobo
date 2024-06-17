import navBar from "../components/navBar";
const header = (title) => {
    return `

        <header class="app-header">
            <span aria-label>${title}</span>
            ${navBar()}
        </header>
    
    `;
};
export default header;
