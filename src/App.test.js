import { render, screen, fireEvent } from "@testing-library/react"; 
import App from "./App";

describe("<App/>", () => {
    test("renders the App component", () => {
        render(<App />);
        const functionElement = screen.getByText(/App:/)
        const componente = screen.getByText(/Resultado/)

        expect(functionElement).toBeInTheDocument();
        expect(componente).toBeInTheDocument();
    } )
})