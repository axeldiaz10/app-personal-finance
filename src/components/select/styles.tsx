import { withStyles } from '@material-ui/core/styles'
import colors from '../../assets/colors';
import FormControl from '@material-ui/core/FormControl';
import styled from 'styled-components'

const Container = styled.div`
    margin: 10px 0;
`

const Select = withStyles({
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
})(FormControl);

export {
    Container,
    Select
}