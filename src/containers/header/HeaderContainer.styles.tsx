import styled from 'styled-components'
import { Toolbar } from '@material-ui/core';
import colors from '../../assets/colors';

const Container = styled.section`
    display: flex;
    flex-direction: row;
    background-color: black;
`

const ToolBar = styled(Toolbar)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${colors.PRIMARY_COLOR}
`

export {
    Container,
    ToolBar
}