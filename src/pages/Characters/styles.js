import styled from 'styled-components';

export const Container = styled.main`
  *{
    .heros {
  position: relative;
  margin: 0;
  display: flex;
  width: fit-content;
  height:100%;
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
  min-height:55rem ;
}
.herolist{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.heroname{
  font-size: 2.5rem;
  font-weight: bold;
}
.herodescript{
  font-size: 2rem;
  color:#808080;
}
.heroimg{
  max-width: 34rem;
  max-height: 34rem;
}}
  `;
export default Container;