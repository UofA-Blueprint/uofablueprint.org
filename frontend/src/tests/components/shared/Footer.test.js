import { Footer } from "../../../components/shared";
import { render, screen } from '@testing-library/react'

test('renders footer', () => {
    render(<Footer />)
    expect(screen.findAllByLabelText("Blueprint 2022"))
    expect(screen.getByRole("footer")).toHaveTextContent("Blueprint 2022 General Home Team Projects For Students Apply Process FAQs For Nonprofits Apply Process FAQs Contact Us Email LinkedIn Instagram Github")
})