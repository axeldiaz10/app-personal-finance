import React, { FunctionComponent, useState } from 'react'
import { ListItem, ListItemText, Collapse, List } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { useHistory } from 'react-router-dom';
import * as S from './styles'

type props = {
    id: number
    text: string,
    icon: string,
    linkTo: string,
    subOptions: Array<{
        id: number,
        text: string,
        icon: string,
        linkTo: string,
    }>
}

const Option: FunctionComponent<props> = ({id, text, icon, linkTo, subOptions}) => {
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const handleClick = () => {
        subOptions 
            ? setOpen(!open)
            : history.push(linkTo)
    };

    return (
        <div>
            <ListItem 
                button
                key={id}
                onClick={handleClick}>
                <S.ListItemIcon>{icon}</S.ListItemIcon>
                <ListItemText
                    primary={text}/>
                    {subOptions && (open ? <ExpandLess /> : <ExpandMore />)}
            </ListItem>
            {subOptions && 
            <Collapse in={open} timeout='auto' unmountOnExit>
                <List
                    component='div'
                    disablePadding>
                    {subOptions.map((subOption) => (
                        <S.ListItem key={subOption.id}>
                            <ListItem 
                                button
                                onClick={() => history.push(subOption.linkTo)}>
                                <S.ListItemIcon>{subOption.icon}</S.ListItemIcon>
                                <ListItemText 
                                    primary={subOption.text}/>
                            </ListItem>
                        </S.ListItem>
                    ))}
                </List>
            </Collapse>}
        </div>
    )
}

export default Option
