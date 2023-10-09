import styled from 'styled-components'

export const InputContainer = styled.div`
  background: ${(props) => props.theme['base-button']};
  display: inline-flex;
  box-sizing: border-box;
  border-radius: 6px;

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
  }

  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }

  button {
    outline: none;
    background-color: transparent;
    border: none;
    width: 2rem;
    height: 2.5rem;
    cursor: pointer;
    margin: 0;
    position: relative;
  }

  button:before,
  button:after {
    display: inline-block;
    position: absolute;
    content: '';
    width: 1rem;
    height: 2px;
    background-color: ${(props) => props.theme['purple-500']};
    transform: translate(-50%, -50%);
  }

  button.plus:after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  input[type='number'] {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-title']};

    max-width: 2rem;
    border-width: 0;
    background-color: ${(props) => props.theme['base-button']};
    text-align: center;
  }
`
