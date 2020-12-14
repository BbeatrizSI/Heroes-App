import React from 'react';
import { mount } from 'enzyme';
import  LoginScreen  from '../../../components/login/LoginScreen';
import { AuthContext } from '../../../auth/AuthContext';
import { types } from '../../../types/types';



describe('Test in <LoginScreen />', () => {

    const history = {
        replace: jest.fn()
    }

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Bárbara'
        }
    }

    const wrapper = mount(
        <AuthContext.Provider value ={ contextValue }>
            <LoginScreen history={ history }/>
        </AuthContext.Provider>
    );

   
    test('should show correctly', () => {
        
        expect( wrapper ).toMatchSnapshot();
               
    });

    test('should show correctly component', () => {
        
       const handleClick = wrapper.find('button').prop('onClick');

       handleClick();

       expect( contextValue.dispatch ).toHaveBeenCalledWith({
           type: types.login,
           payload: {
               name: 'Bárbara'
           }
       })

       expect ( history.replace ).toHaveBeenCalledWith('/');
       localStorage.setItem('lastPath','/dc');
       handleClick();
       expect ( history.replace ).toHaveBeenCalledWith('/dc');
               
    });

    
})