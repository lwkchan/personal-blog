import styled from 'styled-components'

export default {
    primaryColor: '#03DAC5',
    maxWidth: '650px'
}

export const StyledLink = styled.a`
color: ${(props) => props.theme.primaryColor}
`