import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import WriteForm from '../../components/write/WriteForm';
import { postState, postErrorState } from '../../State/postState';
import { userAccount } from '../../State/userState';
import client from '../../lib/api/client';

const emojiArr = ['anger', 'fear', 'happiness', 'disgust', 'sad', 'neutral'];

export default function EditorContainer() {
  const account = useRecoilValue(userAccount);
  const [write, setWrite] = useRecoilState(postState);
  const [post, setPost] = useRecoilState(postErrorState);
  const [postId, setPostId] = useState('');

  const navigate = useNavigate();

  const getTheme = async ({ account, body }) => {
    try {
      const res = await client.post('/diary/getTheme', { account, body });
      if (res.status === 200) {
        console.log('테마 가져오기 성공');
        return res.data;
      } else if (res.status === 400) {
        console.log('데이터베이스 오류입니다.');
        return res.data;
      } else if (res.status === 404) {
        console.log('없는 계정입니다.');
        return res.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const writePost = async ({ title, body, sentiment, summed, theme, account, r, g, b }) => {
    try {
      const res = await client.post('/diary/new', {
        title,
        body,
        sentiment,
        summed,
        theme,
        account,
        r, g, b,
      });
      if (res.status === 200) {
        console.log('글 작성 성공');
        return res.data;
      } else if (res.status === 400) {
        console.log('데이터베이스 오류입니다.');
        alert('다시 시도해주세요.');
        return res.data;
      } else if (res.status === 404) {
        console.log('없는 계정입니다.');
        return res.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const updatePost = async ({
    title,
    body,
    sentiment,
    summed,
    theme,
    account,
    id,
    r, g, b,
  }) => {
    try {
      const res = await client.post('/diary/rewrite', {
        title,
        body,
        sentiment,
        summed,
        theme,
        account,
        id,
        r,
        g,
        b,
      });
      if (res.status === 200) {
        console.log('글 수정 성공!');
        return res.data;
      } else if (res.status === 400) {
        console.log('데이터베이스 오류입니다.');
        alert('다시 시도해주세요.');
        return res.data;
      } else if (res.status === 404) {
        console.log('없는 계정입니다.');
        return res.data;
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeField = (e) => {
    if (e.target.name) {
      setWrite({
        ...write,
        [e.target.name]: e.target.value,
      });
      return;
    }
    console.log(e.target.value);
    if (emojiArr.includes(e.target.value)) {
      setWrite({
        ...write,
        sentiment: e.target.value,
      });
    } else {
      const bList = write.b.split('/');
      const gList = write.g.split('/');
      const rList = write.r.split('/');
      console.log(e.target.key)
      setWrite({
        ...write,
        theme: e.target.value,
        b: bList[e.target.key],
        g: gList[e.target.key],
        r: rList[e.target.key],
      });
    }
  };

  // 포스트 등록
  const onPublish = () => {
    try {
      if (write.id) {
        updatePost({
          title: write.title,
          body: write.body,
          sentiment: write.sentiment,
          theme: write.theme,
          summed: write.summed,
          account: account,
          id: write.id,
          r: write.r,
          g: write.g,
          b: write.b,
        });
      } else {
        setWrite({
          ...write,
          createdAt: new Date(),
        });
        const promise = writePost({
          title: write.title,
          body: write.body,
          sentiment: write.sentiment,
          theme: wri