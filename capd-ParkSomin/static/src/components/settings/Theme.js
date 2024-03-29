import styled from 'styled-components';
import Button from '../common/Button';

const ThemeBlock = styled.div`
  width: 100%;
  padding: 60px;

  display: flex;
  flex-direction: column;
  align-items: left;
`;

const ImageBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  img {
    width: 13rem;
    height: 19rem;
    margin: 12px 15px;
    border-radius: 16px;
    object-fit: cover;
    border: 5px solid transparent;

    &:hover {
      cursor: pointer;
    }

    &:focus {
      border: 5px solid blue;
    }
  }

  .check {
    width: 33px;
    height: 33px;
    margin: 0;

    z-index: 2;

    position: absolute;
    transform: translate(611%, 4%);
  }
`;

const Footer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 40px 0 0 0;

  text-align: right;
`;

export default function Theme({ tempTheme, onClick, handleCheck }) {
  const themesInput = ['basicTheme', 'greenTheme', 'darkTheme'];
  const check = document.activeElement.name;

  return (
    <ThemeBlock>
      <span>테마 선택</span>
      <ImageBlock>
        {themesInput.map((theme, index) => {
          return (
            <div key={theme}>
              {check === theme ? (
                <img
                  src={`${process.env.PUBLIC_URL}/images/User/Check.svg`}
                  alt="check"
                  className="check"
                />
              ) : null}
              <img
                name={theme}
                src={`${process.env.PUBLIC_URL}/images/Background/Login${
                  index + 1
                }.png`}
                alt="theme"
                tabIndex="0"
                onFocus={handleCheck}
              />
            </div>
          );
        })}
      </ImageBlock>
      <Footer>
        <Button $save="true" onClick={onClick}>
          수정하기
        </Button>
      </Footer>
    </ThemeBlock>
  );
}
