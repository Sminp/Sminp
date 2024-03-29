import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import EmojiExplain from './modal/EmojiExplain';
import moment from 'moment';

const MonthlyCalendarBlock = styled.div`
  margin: 0 10px;

  color: ${(props) => props.theme.text};

  .main-header {
    width: 50%;
    margin: 0 0 30px 0;
    padding: 0 0 0 15px;

    font-size: 1rem;
  }

  .main-header > span {
    margin: 0 20px 0 0;

    font-weight: bold;
  }

  .explain {
    z-index: 5;
  }
`;

const CalendarBlock = styled.div`
  border-radius: 13px;
  overflow: hidden;

  .react-calendar {
    width: 880px;
    height: 753px;
    padding: 20px 40px;
    background: ${(props) => props.theme.calendarBackground};
    border: 0;

    display: flex;
    flex-direction: column;
  }

  .react-calendar button {
    height: 6.5rem;
    padding: 10px 0;
    // border: 1px solid ${palette.gray[0]};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    &:enabled:hover {
      background: none;

      color: ${palette.gray[0]};
    }

    // 수정
    &:enabled:focus {
      background: none;
      // background: pink;
      // border-radius: 16px;

      color: ${(props) => props.theme.subtext};
    }
  }

  .react-calendar__navigation {
    width: 100%;
    height: 4.5rem;
    margin: 10px 0 60px 0;
    padding: 13px 0 0 0;
    border-bottom: 1px solid ${palette.gray[0]};

    .react-calendar__navigation__label {
      height: 100%;

      font-size: 1.7rem;
      font-weight: bold;
      color: ${(props) => props.theme.text};
    }

    .react-calendar__navigation__arrow {
      height: 100%;
      padding: 15px 0;

      flex-grow: 0.001;
      font-size: 1rem;
      font-weight: bold;
    }
  }

  .react-calendar__month-view__weekdays {
    margin: 0 0 10px 0;

    abbr {
      /*월,화,수... 글자 부분*/
      font-size: 1rem;
      font-weight: 700;
      text-decoration: none;
      letter-spacing: -0.025rem;
      color: ${(props) => props.theme.weekdayColor};
    }
  }

  .react-calendar__month-view__days__day {
    color: #a6a6a6;
  }

  .react-calendar__month-view__days__day--neighboringMonth {
    color: #d6d6d6;
  }

  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 3rem 2rem;
  }

  .react-calendar__tile {
    text-align: center;

    font-size: 1rem;
    font-weight: 500;
  }

  .react-calendar__tile:disabled {
    background: #f0f0f0;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: none;
  }

  // 수정
  .react-calendar__tile--now {
    border-radius: 16px;
    background: ${(props) => props.theme.background};
  }

  .react-calendar__tile--active {
    background: none;
    color: white;
  }
`;

const EmojiBlock = styled(Link)`
  width: 45px;
  height: 45px;
  margin: 10px 0 0 0;
  background: ${palette.gray[0]};
  border-radius: 100%;

  &:hover {
    border: 1px solid ${palette.gray[0]};
  }
`;

// 수정 이모티콘이 없을 때 나타나는 블록
// const DayBlock = styled.div`
//   width: 45px;
//   height: 45px;
//   margin: 10px 0 0 0;
//   background: ${palette.gray[0]};
//   border-radius: 100%;

//   &:hover {
//     border: 1px solid ${palette.gray[0]};
//   }
// `;

export default function MonthlyCalendar({ account, posts, year }) {
  const addContent = ({ date }) => {
    const day = parseInt(moment(date).format('DD'));
    const currentMonth = parseInt(moment(date).format('MM'));
    if (posts) {
      const emoji = posts.map((idx) => {
        if (idx.day === day && idx.month === currentMonth) {
          return (
            <EmojiBlock
              key={idx.id}
              to={`/${account}/${idx.id}`}
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/Emoji/${idx.sentiment}.svg)`,
                backgroundSize: 'cover',
              }}
            />
          );
        }
        return null;
      });
      return emoji;
    }
    return null;
  };

  // locale="ko-KR" // 한국어로 설정
  return (
    <MonthlyCalendarBlock>
      <div className="main-header">
        <span>감정달력</span> 일기를 쓰고 <EmojiExplain />을 모아보세요!
      </div>
      <CalendarBlock>
        <Calendar
          calendarType="hebrew"
          tileContent={addContent}
          prev2Label={null}
          next2Label={null}
          formatDay={(locale, date) => moment(date).format('D')}
          onClickYear={(value, event) => year(String(value).slice(11, 15))}
        />
      </CalendarBlock>
    </MonthlyCalendarBlock>
  );
}
