import styled from 'styled-components';

export const AuthForm = styled.form`
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #a8a8a8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin-inline: auto;
  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 310px;
  }
  .error {
    margin-top: 3px;
    display: block;
    color: red;
  }
`

export const AuthFormInput = styled.input`
  padding: .5rem;
  border-radius: 6px;
  border: 1px solid #a8a8a8;
  font-size: 1.5rem;
`

export const AuthButton = styled.button`
  padding: .5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background-color: lightblue;
  border: none;
  width: 100%;
  max-width: 310px;
  cursor: pointer;
`