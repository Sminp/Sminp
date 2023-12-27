import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import {
  userAccount,
  userImage,
  userImageState,
  userState,
  userThemeState,
} from '../../State/userState';
import Header from '../../components/common/header/Header';
import { authCheckState } from '../../State/authState';
import { postState } from '../../State/postState';
import { useParams } from '../../../node_modules/react-router-dom/dist/index';

export default function HeaderContainer() {
  const account = useRecoilValue(userAccount);
  const userProfile = useRecoilValue(userImage);
  const post = useRecoilValue(postState);
  const resetUser = useResetRecoilState(userState);
  const resetProfile = useResetRecoilState(userImageState);
  const resetTheme = useResetRecoilState(userThemeState);
  const resetPost = useResetRecoilState(postState);
  const resetAuth = useResetRecoilState(authCheckState);
  const params = useParams();

  const navigate = useNavigate();

  // 에러 처리 추가 수정 localStorage removeItem사용
  const handleLogout = () => {
    resetUser();
    resetProfile();
    resetTheme();
    resetAuth();
    resetPost();
    localStorage.removeItem('account');
    localStorage.removeItem('theme');
    localStorage.removeItem('user-image');
    navigate('/');
    window.location.reload();
    // 버그 바로 안지워짐
  };

  const handlePost = () => {
    resetPost();
  };

  if (params.postId) {
    return (
      <Header
        account={account}
        userImage={userProfile}
        onLogout={handleLogout}
        onUnload={handlePost}
        post={post}
      />
    );
  } else {
    return (
      <Header
        account={account}
        userImage={userProfile}
        onLogout={handleLogout}
        onUnload={handlePost}
        post={null}
      />
    );
  }
}
