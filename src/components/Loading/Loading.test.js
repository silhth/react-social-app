import { render, screen } from '@testing-library/react';
import Loading from "."


test('check the loading contetn',()=> {
    render(<Loading />);
    const message =screen.getByText(`Please wait Content Loading...`);
    expect(message).toBeInTheDocument();
});


test('checks markup in <Loading/> component', () => {
    const { container } = render (<Loading />);

    const loading = container.querySelector("div");
    const img = container.querySelector("div img");
    const divText = container.querySelector("div div");

    expect(loading).toBeTruthy();
    expect(img).toBeTruthy();
    expect(divText).toBeTruthy();

});