import React from 'react';
import { mount } from 'enzyme';
import ButtonComponent from '.';


describe('Simulate events and show component', () => {
    let textButton = 'Text Button'
    const onClickMock = jest.fn()
    let wrapper
    
    beforeEach(() => {
        wrapper = mount(
            <ButtonComponent 
                text={textButton}
                onClick={onClickMock}
            />
        )
    })

    afterEach(() => {
        wrapper.unmount()
    }) 

    it('should be render', () => {
        expect(wrapper.find('ButtonComponent')).toHaveLength(1);
    })

    it('should be show a label', () => {
        expect(wrapper.find('ButtonComponent').prop('text')).toEqual(textButton);
    })

    it('should be call onClick event one time', () => {
        wrapper.find('button').first().simulate('click')
        expect(onClickMock.mock.calls.length).toEqual(1)
    })
})

// describe('should be show button with loading', () => {
//     let wrapper
//     beforeEach(() => {
//         wrapper.mount(
//             <ButtonComponent
//                 loading={true}
//             />
//         )
//     })

//     it('should be render CircularProgress', () => {
//         expect(wrapper.find('CircularProgress')).toHaveLength(1)
//     })
// })
