import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { setConfig } from 'next/config';
import * as nextConfig from '../next.config';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// NextJS
setConfig(nextConfig);
process.env.useMercadoPagoSandbox = 'true';
process.env.sanityProjectId = 'fakeproject';
process.env.sanityDataset = 'fakedataset';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
