import styled from 'styled-components'

const App = styled.section`
    display: flex;
    flex-direction: row;
    height: 100vh;
`

const Header = styled.section`
    display: flex;
    flex-direction: row;
    background-color: blue;
`

const Body = styled.section`
    flex: 4;
    display: flex;
    flex-direction: column;
    width: 100%;
`

const Content = styled.section`
    display: flex; 
    flex-direction: column;
    height: 100%;
    margin: 30px;
    overflow: auto;
`

const Sidebar = styled.section`
    width: 240px;
    flex: 1;
`

export {
    App,
    Header,
    Body,
    Content,
    Sidebar
}