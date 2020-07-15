import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import colors from '../../assets/colors';
import { Button as Bt } from '@material-ui/core';

const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`

const Button = withStyles({
    root: {
        width: '100%',
        backgroundColor: `${colors.PRIMARY_COLOR}`,
        '&:hover': {
            backgroundColor: `${colors.PRIMARY_COLOR}`,
            borderColor: 'black',
        },
        '&:active': {
            backgroundColor: `${colors.PRIMARY_COLOR}`,
        },
    },
})(Bt);

export {
    Container,
    Button
}