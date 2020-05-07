import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { setConfig } from 'next/config';
import * as nextConfig from '../next.config';

// NextJS
setConfig(nextConfig);
process.env.useMercadoPagoSandbox = 'true';

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
