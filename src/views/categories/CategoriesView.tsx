import React, { useEffect } from 'react'
import * as S from './CategoriesView.styles'
import ListItem from '../../components/listItem/index'
import FloatButton from '../../components/floatButton'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategories, deleteCategory } from '../../state/categories/actions';
import { LinearProgress } from '@material-ui/core'
import { RootState } from '../../state/rootReducer';

type props = {
    
}

const CategoriesView: React.FunctionComponent<props> = (props) => {
    const dispatch = useDispatch()
    const categories = useSelector((state: RootState) => state.categoriesReducer.categories)
    const loadingCategories = useSelector((state: RootState) => state.categoriesReducer.loadingCategories)
    const history = useHistory()

    const handleClickNew = () => history.push('/categories/new')
    const handleClickEdit = (id: number) => history.push(`/categories/${id}`)
    const handleClickDelete = (id: number) => dispatch(deleteCategory(id))
    
    
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <S.Container>
            {!loadingCategories 
                ? categories.map((category) => (
                    <div key={category.id}>
                        <ListItem
                            title={category.name}
                            onClickEdit={() => handleClickEdit(category.id)}
                            onClickDelete={() => handleClickDelete(category.id)}
                        />
                    </div>))
                : <LinearProgress color='secondary' />}
            <FloatButton onClick={handleClickNew}/>
        </S.Container>
    )
}

export default CategoriesView
