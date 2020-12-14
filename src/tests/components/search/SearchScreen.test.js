import React from 'react';
import { mount } from 'enzyme';
import  SearchScreen  from '../../../components/search/SearchScreen';
import { MemoryRouter, Route } from 'react-router-dom';



describe('Test in <SearchScreen />', () => {

    test('should show correctly with default values', () => {
        
       const wrapper = mount(
           <MemoryRouter initialEntries={['/search']}>
               <Route path="/search" component={ SearchScreen }/>
           </MemoryRouter>
       )

       expect( wrapper ).toMatchSnapshot();
       expect( wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
                     
    });

    test('should show Batman and input with queryString value', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        )
 
       expect( wrapper.find('input').prop('value')).toBe('batman');
       expect( wrapper ).toMatchSnapshot();
                      
     });

    test('should show error if hero isnt found', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ SearchScreen }/>
            </MemoryRouter>
        )
 
        expect( wrapper.find('.alert-danger').text().trim()).toBe('There is no hero with batman123');
                      
    });
    test('should call history push', () => {
        
        const history = {
            push: jest.fn()
        };

        const wrapper = mount(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <Route path="/search" component={ () => <SearchScreen history={ history } /> } />
            </MemoryRouter>
        )
 
        wrapper.find('input').simulate('change', {
           target: {
               name: 'searchText',
               value: 'batman'
           } 
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });
        
        expect( history.push ).toHaveBeenCalledWith(`?q=batman`)
        
    });

    
})