import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as nextConfig from '../next.config';

process.env.accessToken = nextConfig.env.accessToken;

// Configure Enzyme with React 16 adapter
Enzyme.configure({ adapter: new Adapter() });
