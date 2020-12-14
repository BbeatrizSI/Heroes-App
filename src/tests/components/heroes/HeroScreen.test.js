import React from 'react';
import { mount } from 'enzyme';
import  HeroScreen  from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';




describe('Test in <HeroScreen />', () => {

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }


    const wrapper = mount(
        <MemoryRouter initialEntries={['/hero']}>
            <HeroScreen history={ history }/>
        </MemoryRouter>
    );

   
    test('should show correctly Redirect if there is not arg in URL', () => {
        
        expect( wrapper.find('Redirect').exists() ).toBe(true);
               
    });

    test('should show a hero if params exists', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('.row').exists() ).toBe(true);
               
    });

    test('should go back prior screen with push', () => {
        
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ () =>  <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

       wrapper.find('button').prop('onClick')();

       expect( history.push ).toHaveBeenCalledWith('/');
       expect( history.goBack ).not.toHaveBeenCalledWith();

    });

    test('should go back prior screen with goBack', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider']}>
                <Route path="/hero/:heroId" component={ () =>  <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

       wrapper.find('button').prop('onClick')();

       expect( history.goBack ).toHaveBeenCalledWith();
       expect( history.push ).toHaveBeenCalledTimes(0);

    });
    
    test('should call redirect if hero doesnt exists', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={['/hero/marvel-spider47879878']}>
                <Route path="/hero/:heroId" component={ () =>  <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

       expect( wrapper.text() ).toBe('');

    });

    
})