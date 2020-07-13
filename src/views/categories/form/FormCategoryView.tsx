import React, { useEffect, useState } from 'react'
import * as S from './FormCategoryView.styles'
import Input from '../../../components/input'
import Button from '../../../components/button'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategory, createCategory, editCategory } from '../../../state/categories/actions'
import { RootState } from '../../../state/rootReducer'
import { Category } from '../../../helpers/types'

type props = {

}

const CategoryView: React.FunctionComponent<props> = () => {
    const [categoryState, setCategoryState] = useState<Category>({
        id: null,
        name: '',
    })
    const history = useHistory()
    const params = useParams<{id: string}>()
    const dispatch = useDispatch()
    const category = useSelector((state: RootState) => state.categoriesReducer.category)
    const loadingCategory = useSelector((state: RootState) => state.categoriesReducer.loadingCategory)


    useEffect(() => {
        params.id && dispatch(fetchCategory(Number(params.id)))
    }, [])


    // Continuar con logica para reutilizar vista categoryVierw
    useEffect(() => {
        params.id !== 'new' && setCategoryState(category)
    }, [category])

    const handleChangeValue = (value: string, key: string) => {
        setCategoryState({
            ...categoryState,
            [key]: value
        })
    }

    const handleCategoryCreator = () => {
        if(validateFields()) {
            params.id === 'new'
                ? dispatch(createCategory(categoryState, history))
                : dispatch(editCategory(categoryState, history))
        } else {
            alert('Invalid field: verify information')
        }
    }

    const validateFields = () => {
        if(categoryState.name) {
            return true
        }

        return false
    }

    return (
        <S.Container>
            <Input
                type='text'
                inputKey='name'
                label='Name'
                value={categoryState.name}
                onChangeValue={handleChangeValue}/>
            <Button
                loading={loadingCategory}
                text={params.id === 'new' ? 'New' : 'Edit'}
                onClick={handleCategoryCreator}/>
        </S.Container>
    )
}

export default CategoryView
