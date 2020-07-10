import styled from 'styled-components'
import colors from '../../assets/colors'

type PropsStyle = {
    fontStyle?: string,
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${colors.PRIMARY_COLOR};
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
`

const Avatar = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`

const Info = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
`

const Title = styled.span`
    font-size: 20;
    color: ${colors.BLACK_TEXT};
    margin-bottom: 5px;
`

const Primary = styled.span<PropsStyle>`
    color: ${colors.SHADOW};
    font-size: 13px;
    font-style: ${props => props.fontStyle};
    margin-bottom: 5px;
`

const Secondary = styled.span<PropsStyle>`
    color: ${colors.SHADOW};
    font-size: 11px;
    font-style: ${(props) => props.fontStyle};
`

const Actions = styled.div`
    display: flex;
    flex-direction: row;
`

export {
    Container,
    Info,
    Avatar,
    Actions,
    Title,
    Primary,
    Secondary
}