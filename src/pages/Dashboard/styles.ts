import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;

  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 710px;
  height: 70px;
  display: flex;

  input {
    flex: 1;
    background: #ffffff;

    border: 0;
    border-radius: 5px 0 0 5px;

    padding: 0 24px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;

    border: 0;
    border-radius: 0 5px 5px 0;

    background: #04d361;
    color: #ffffff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Repositories = styled.div``;
