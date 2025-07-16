
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { BrowserRouter } from 'react-router-dom';
import Index from '../../pages/Index';

const renderWithRouter = (component: React.ReactElement) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('Index Page', () => {
  test('renders SNIT Solutions heading', () => {
    renderWithRouter(<Index />);
    expect(screen.getByText('SNIT Solutions')).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    renderWithRouter(<Index />);
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Why Us')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  test('renders services section', () => {
    renderWithRouter(<Index />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
    expect(screen.getByText('Cloud Services')).toBeInTheDocument();
    expect(screen.getByText('DevOps Consulting')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    renderWithRouter(<Index />);
    expect(screen.getByText('Contact Us')).toBeInTheDocument();
    expect(screen.getByText('info@snitsolutions.in')).toBeInTheDocument();
  });
});
