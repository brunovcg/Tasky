import styled from 'styled-components';

export const Container = styled.div`
  width: 600px;
  height: 100%;
  background-color: var(--transparent-black);
  display: flex;
  justify-content: center;


  .popUp{
    width: 400px;
    height: fit-content;
    padding: 15px;
    background-color: var(--white);
    margin-top: 40px;

    .titleBox{

      display: flex;
      justify-content: space-evenly;
      h2{
        color: var(--dark-grey);

      }

      button{
        font-size: 1rem;
      }
      
    }

    .formBox{
      margin-bottom: 20px;
      form{

        box-sizing: content-box;
          padding-top: 30px;

        

        .inputBox{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .buttonBox{
          box-sizing: content-box;
          padding-top: 30px;
          display: flex;
          justify-content:center;
        }
      }

    }
  }

  @media (max-width: 500px){
    width: 300px;
    position: absolute;
    top: -115px;
    left: -40px;
  }


`



