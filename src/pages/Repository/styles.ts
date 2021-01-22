import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: #666;
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }

    div {
      margin-left: 25px;

      strong {
        color: #3d3d4d;
        font-weight: 700;
        font-size: 36px;
      }

      p {
        color: #737380;
        margin-top: 4px;
        font-size: 18px;
      }
    }
  }

  ul {
    margin-top: 40px;
    display: flex;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        color: #3d3d4d;
        font-size: 36px;
        font-weight: bold;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
        font-size: 20px;
      }
    }
  }
`;
export const Issues = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;

    transition: transform 0.2s;

    &:hover {
      transform: translateX(10px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        font-weight: bold;
        color: #3d3d4d;
      }

      p {
        margin-top: 1px;
        font-size: 18px;
        color: #a8a8b3;
      }
    }

    svg {
      margin-left: auto;
      color: #c9c9d4;
    }
  }
`;
