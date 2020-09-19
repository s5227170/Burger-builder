import { configure, shallow } from 'enzyme';
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import buildControl from '../../components/Burger/BuildControls/BuildControl/BuildControl';

import { BurgerBuilder } from './BurgerBuilder';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import { initIngredients } from '../../store/actions';


configure({adapter: new Adapter()});

describe('<BurgerBuilder />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<BurgerBuilder onInitIngredients={() => {} }/>);
    });

    initIngredients('should render <BuildControls /> when receiving ingredients', () => {
        wrapper.setProps({ings: {salad: 0}});
        expect(wrapper.find(buildControls)).toHaveLength(1);
    })
});