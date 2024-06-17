import navBar from "../components/navBar";

const header = (title: string) => {
  return `

        <header class="app-header">
            <span aria-label>${title}</span>
            ${navBar()}
        </header>
    
    `;
};

export default header;
