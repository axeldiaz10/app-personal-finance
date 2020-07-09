import styled from 'styled-components'
import { withStyles } from "@material-ui/core/styles";
import { TextField as Tf } from '@material-ui/core';
import colors from '../../assets/colors';

const Container = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`
const TextField = withStyles({
    root: {
        width: '100%',
        borderColor: `${colors.PRIMARY_COLOR}`,
        '& label.Mui-focused': {
            color: `${colors.PRIMARY_COLOR}`,
        },
        // '& label': {
        //     color: `${colors.PRIMARY_COLOR}`,
        // },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: `${colors.PRIMARY_COLOR}`,
            },
            '&:hover fieldset': {
                borderColor: `${colors.PRIMARY_COLOR}`,
            },
            '&.Mui-focused fieldset': {
            borderColor: `${colors.PRIMARY_COLOR}`,
            },
        },
    },
})(Tf);

export {
    Container,
    TextField
}

