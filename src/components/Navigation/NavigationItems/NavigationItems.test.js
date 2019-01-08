// Required for components to render
import React from 'react';

// required testing
import { configure, shallow }from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// required components
import NavigationItems from './NavigationItems';
import NavigationItem from './NavigationItem/NavigationItem';

// conecting enzyme to react
configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elements if authenticated', () => {
        // wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should render a <NavigationItem /> with a link="/logout" and test "Logout"', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
    });
});