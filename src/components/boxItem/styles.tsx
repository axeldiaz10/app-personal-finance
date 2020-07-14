import styled from 'styled-components'
import colors from '../../assets/colors'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${colors.PRIMARY_COLOR};
    border-radius: 4px;
    margin: 10px 0px;
    padding: 20px;
`

const Body = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`

export {
    Container,
    Body
}