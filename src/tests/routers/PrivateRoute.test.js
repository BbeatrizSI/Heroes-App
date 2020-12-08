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

    Storage.prototype.setItem = jest.fn();

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
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
        
    });

    test('should block component if user isnt authenticated', () => {
        
        const wrapper = mount(
            <MemoryRouter>
                <PrivateRoute 
                    isAuthenticated={ false }
                    component= {() => <span>Done!</span>}
                     {...props}
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(false);
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/marvel');
        
    });

    
})