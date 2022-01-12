import { render, screen } from '@testing-library/react';
import Footer from "."


test('check the footer contetn',()=> {
    render(<Footer />);
    const year = new Date().getFullYear();
    const message =screen.getByText(`Copyright Edgemony ${year}`);
    expect(message).toBeInTheDocument();
});


test('checks markup in <Footer/> component', () => {
    const { container } = render (<Footer />);

    const footer = container.querySelector("footer");
    const p = container.querySelector("footer p");
    const hr = container.querySelector("footer hr");

    expect(footer).toBeTruthy();
    expect(p).toBeTruthy();
    expect(hr).toBeTruthy();

});