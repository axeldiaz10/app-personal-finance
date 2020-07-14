import styled from 'styled-components'

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`

const Amount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
`

const Input = styled.div`
    width: 100%;
    margin-right: 5px;
`
const Select = styled.div`
    width: 100%;
    margin-left: 5px;
`

export {
    Container,
    Amount,
    Input,
    Select
}