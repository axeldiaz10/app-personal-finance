import styled from 'styled-components'
import colors from '../../assets/colors'

const Container = styled.section`
    width: 240px;
    flex: 1;
    border-right: 1px rgba(0, 0, 0, 0.12) solid;
    background-color: ${colors.PRIMARY_COLOR};
    color: ${colors.WHITE};
`
const Logo = styled.div`
    height: 63px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
`
export {
    Container,
    Logo
}