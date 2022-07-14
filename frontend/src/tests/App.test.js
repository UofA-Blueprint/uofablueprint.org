import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

test('renders header placeholder', () => {
    render(<App />)
    const linkElement = screen.getByText('About Us')
    expect(linkElement).toBeInTheDocument()
})
