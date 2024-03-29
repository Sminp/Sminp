import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Responsive from '../common/Responsive';

const AuthTemplateBlock = styled(Responsive)`
  background: ${(props) => props.theme.titleBackground}};

  display: flex;
  flex-direction: row;

  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const ImageBlock = styled.div`
  width: 50%;
  height: 100%;
  background-image: url(${(props) => props.theme.src});
  background-size: cover;
  background-position: center;

  display: block;
`;

const InnerBox = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .logo-area {
    margin-bottom: 50px;

    div {
      width: 17rem;
      height: 7rem;
      background-image: url(${(props) => props.theme.title});
      background-size: cover;
    }
  }
`;

export default function AuthTemplate({ children }) {
  return (
    <AuthTemplateBlock>
      <ImageBlock />
      <InnerBox>
        <div className="logo-area">
          <Link to="/">
            <div />
          </Link>
        </div>
        {children}
      </InnerBox>
    </AuthTemplateBlock>
  );
}
