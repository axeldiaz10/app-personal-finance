import styled from 'styled-components'
import colors from '../../assets/colors'
import EditIcon from '@material-ui/icons/Edit'

const Container = styled.div`
    position: relative;
`

const EditIconSection = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${colors.PRIMARY_COLOR};
    border-radius: 50px;
`

const Icon = styled(EditIcon)`
    color: white;
`

export {
    Container,
    Icon,
    EditIconSection
}