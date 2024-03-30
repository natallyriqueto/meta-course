import { MemoryRouter } from 'react-router-dom';
import { Hero } from '../sections/Hero';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

describe('Hero Section', () => {
  it('should render hero title', () => {
    render(<MemoryRouter><Hero/></MemoryRouter>);

    const element = screen.getByText(/Little Lemon/i);
  
    expect(element).toBeInTheDocument();
  });

  it('should render hero description', () => {
    render(<MemoryRouter><Hero/></MemoryRouter>);

    const element = screen.getByText(/We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist./i);
  
    expect(element).toBeInTheDocument();
  });


});