import React, { FunctionComponent, ChangeEvent } from 'react'
import { Avatar } from '@material-ui/core';
import { IconButton } from '@material-ui/core'
import * as S from './styles'

type props = {
    width: number,
    height: number,
    src: string,
    editable?: boolean,
    onChange?: Function
}

const AvatarComponent: FunctionComponent<props> = ({width, height, src, editable, onChange}: props) => {

    const handleChangeSelectedFile = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(URL.createObjectURL(event.target.files[0]))
    }

    const handleFileInputClick = () => {
        document.getElementById('contained-button-file')?.click()
    }


    return (
        <S.Container>
            <Avatar 
                src={src}
                style={{width, height}}/>
            {editable && 
            <S.EditIconSection>
                <IconButton onClick={() => {}} >
                    <S.Icon onClick={handleFileInputClick}/>
                </IconButton>
            </S.EditIconSection>}

            <input
                style={{ display: 'none' }}
                accept="image/*"
                id="contained-button-file"
                multiple
                type="file"
                onChange={(e) => handleChangeSelectedFile(e)}
                />
        </S.Container>
    )
}

export default AvatarComponent
