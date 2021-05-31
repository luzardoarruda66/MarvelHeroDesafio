import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
  *{
    html{
    font-size: 62.5%;
    box-sizing: border-box;
  }
  body{
    font: 1.6rem Helvetica;
    margin: 0;
    font-family: 'Marvel';
    }
  .grid-container{
    display: grid;
    grid-template-areas: 
    "header"
    "main"
    "footer";
    height: 100%;
  }
  .header{
    grid-area: header;
    background-color: #ee171f;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    height: 5rem;
  }
  .header img{
    max-width: 15rem;
    max-height: 15rem;
    text-decoration: none;
    padding: 0;
  }
  .main{
    font-size: 75%;
    padding: 0rem;
    grid-area: main;
  }
  .footer{
    grid-area: footer;
    background-color: #ee171f;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .heros {
  position: relative;
  margin: 0;
  display: flex;
  flex-wrap:wrap;
}
.heros li {
  display: block;
  list-style-type: none;
  padding: 0;
  margin: 0;
  flex: 0 1 34rem;
  margin: 1rem;
  height: 50rem;
  border: .1rem #413e3e solid;
  max-width: fit-content;
  max-height: 50rem;
  background-color: #c0c0c0 ;
}
.herolist{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 23rem;
}
.heroname{
  font-size: 2rem;
  font-weight: bold;
}
.herodescript{
  padding: 0;
  font-size: 1.5rem;
  color:#808080;
}
.heroimg{
  width: 23rem;
  height: 23rem;
}
.heros li:hover{
  transition: .5s;
  background-color:#ee171f;
}

/* Botão */
.btnMore{
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: all .5s;
}
.btnMore :hover{
  background-color: #ee171f;
}
  .button{
  justify-content: center;
  align-items: center;
  background: #f1f1f1;
  height: 40px;
  font-weight: bold;
  
  cursor: pointer;
  box-shadow: 2px 2px 10px 1px #000000;
  margin: 20px auto;
  padding: 0  50px;
  border-radius: 5px;
  transition: all .5s;
}
.button :hover{
  background-color: #ee171f;
}
  }
`;
