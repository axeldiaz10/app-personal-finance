import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    height: 100%;
`

const Checkbox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

const Avatar = styled.div`
    align-self: center;
    margin: 10px;
`


export {
    Container,
    Checkbox,
    Avatar
}
