import React from 'react';
import { mount } from 'enzyme';
import InputComponent from '.';


describe('Simulate events and show component', () => {
    const onChangeValueMock = jest.fn()
    const inputKeyMock = 'keyMock'
    const eventMock = { target: { name: 'name', value: 'texto' } };
    let wrapper;

    beforeEach(() => {
        wrapper = mount(
            <InputComponent 
                inputKey={inputKeyMock}
                onChangeValue={onChangeValueMock}
            />
        )
    })

    afterEach(() => {
        wrapper.unmount()
    }) 

    it('should be render', () => {
        expect(wrapper).toHaveLength(1)
    })

    it('should be call onChange event one time', () => {
        wrapper.find('input').first().simulate('change', eventMock)
        expect(onChangeValueMock).toHaveBeenCalled()
    })

    it('should be get inputKeyMock and textMock', () => {
        wrapper.find('input').first().simulate('change', eventMock )
        expect(onChangeValueMock).toHaveBeenCalledWith(eventMock.target.value, inputKeyMock)
    })
})
