import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['purple-500']};
    }

    body {
        background: ${(props) => props.theme.background};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .Toastify__toast-theme--light.Toastify__toast--success,  
    .Toastify__toast-theme--light.Toastify__toast--warning {
        color: ${(props) => props.theme['base-title']};

        font-family: 'Baloo 2',sans-serif;
        font-size: 1rem;
        line-height: 1.6;
        font-weight: 700;
        word-wrap: break-word;
    }
`
