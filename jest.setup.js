/* eslint-disable @typescript-eslint/no-var-requires */
require('jest-styled-components');
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

// Mock for Slider react-responsive-carousel css import
jest.mock('raw-loader!react-responsive-carousel/lib/styles/carousel.min.css', () => '', { virtual: true });
