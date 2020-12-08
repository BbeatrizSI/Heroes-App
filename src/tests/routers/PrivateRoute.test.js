import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Test in <PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    test('should show component if authenticated and save in localStorage', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ true }
                    component= {() => <span>Done!</span>}
                     {...props}
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(true);
        
    });
    
})