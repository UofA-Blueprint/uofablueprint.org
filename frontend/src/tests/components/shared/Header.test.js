import { Header } from "../../../components/shared";
import { render, screen } from '@testing-library/react'

test('renders header', () => {
    render(<Header />)
    expect(screen.findAllByLabelText("About us"))
    expect(screen.getByRole("header")).toHaveTextContent("About Us Projects For StudentsFor Nonprofits")
})