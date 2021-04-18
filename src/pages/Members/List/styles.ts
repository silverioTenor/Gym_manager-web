import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  place-content: center;
`;

export const View = styled.section`
  width: 100%;
  max-width: 1100px;
  padding: 20px 40px;

  box-shadow: 0 0 6px 0 #666360;

  header {
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: space-between;

    form {
      width: 100%;
      max-width: 700px;
      display: flex;

      > div {
        flex: 1;
        border-radius: 10px 0 0 10px;
      }

      button {
        width: 150px;
        border-radius: 0 10px 10px 0;
      }
    }

    button {
      max-width: 200px;
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 40px;

  tbody tr:nth-child(odd) {
    background: #1c1c1c;
  }

  tr {
    display: grid;
    grid-template-columns: auto 1fr 140px;
    align-items: center;
    color: #f4ede8;
    font-size: 16px;
    transition: background 0.2s;

    th,
    td {
      width: auto;
      padding: 20px;
      display: flex;
      justify-content: center;
    }

    td:first-child {
      display: flex;
      align-items: center;

      img {
        width: 80px;
        height: 80px;
        margin-right: 16px;

        object-fit: cover;
        border-radius: 50%;
        box-shadow: 2px 2px 4px 1px #666360;

        & + span {
        }
      }

      span {
        width: max-content;
      }
    }
  }
`;
