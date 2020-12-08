import React from 'react';
import { mount } from 'enzyme';
import AppRouter from '../../routers/AppRouter';
import { AuthContext } from '../../auth/AuthContext';

describe('Test in <AppRouter />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: false
        }
    }

    test('should show login if not authenticated', () => {
        
        const wrapper = mount(
                <AuthContext.Provider value= { contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            
        );

        expect( wrapper).toMatchSnapshot();
        
    });

    test('should show Marvel if is authenticated', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: true,
                name: 'Lara'
            }
        }
        
        const wrapper = mount(
                <AuthContext.Provider value= { contextValue }>
                    <AppRouter />
                </AuthContext.Provider>
            
        );

        expect( wrapper.find('.navbar').exists()).toBe(true);
        
    });
    
})