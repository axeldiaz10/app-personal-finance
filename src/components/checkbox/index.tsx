import React, { FunctionComponent } from 'react'
import { Checkbox } from '@material-ui/core'

type props = {
    value: boolean,
    onChange: Function
}

const CheckboxComponent: FunctionComponent<props> = ({value, onChange}) => {
    return (
        <div>
            <Checkbox
                value={value}
                onChange={(event) => onChange(event.target.checked)}
            />
        </div>
    )
}

export default CheckboxComponent
