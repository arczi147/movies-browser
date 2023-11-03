import { GlobalWrapper } from "../../../common/GlobalWrapper/styled";
import { Background, BanerContainer, Baner, Shadow } from "./styled";
import baner from "./baner.png";
import shadow from "../../../images/shadow.png"

const MovieBaner = () => (
  <Background>
    <BanerContainer>
      <Shadow src={shadow} />
      <GlobalWrapper>
        <Baner src={baner} />
      </GlobalWrapper>
    </BanerContainer>
  </Background>
);

export default MovieBaner;