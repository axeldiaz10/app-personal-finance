import styled from 'styled-components'
import { ListItemIcon as Lii} from '@material-ui/core'
import colors from '../../assets/colors'

const ListItem = styled.div`
    padding-left: 30px;
`

const ListItemIcon = styled(Lii)`
    color: ${colors.WHITE} !important;
`

export {
    ListItem,
    ListItemIcon,
}