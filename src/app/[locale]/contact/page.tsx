'use client';

import SubLayout from '@/components/layout/SubLayout';

import styled from 'styled-components';

const ContactWrap = styled.div`
  width: 100%;
  padding: 160px 5vw;

  .title {
    text-align: center;
    margin-bottom: 60px;

    h2 {
      font-size: 2.4rem;
      font-weight: 700;
      color: #111;
    }

    p {
      color: #555;
      margin-top: 10px;
    }
  }

  .contactBox {
    max-width: 600px;
    margin: 0 auto;
    background: #fafafa;
    border-radius: 16px;
    padding: 40px 30px;
    box-shadow: 0 5px 16px rgba(0,0,0,0.06);

    label {
      font-size: 0.95rem;
      font-weight: 600;
      color: #222;
    }

    input,
    textarea {
      width: 100%;
      margin-top: 10px;
      margin-bottom: 20px;
      padding: 14px 16px;
      border: 1px solid #eee;
      border-radius: 8px;
      font-size: 1rem;

      &:focus {
        border-color: #111;
      }
    }

    button {
      width: 100%;
      padding: 14px 0;
      background: #111;
      color: #fff;
      border-radius: 999px;
      border: none;
      font-size: 1rem;
      transition: 0.3s;

      &:hover {
        background: #333;
      }
    }
  }
`;

export default function ContactPage() {
  return (
    <SubLayout>
      <ContactWrap>
        <div className="title">
          <h2>Contact Me</h2>
          <p>아래 양식을 작성하여 문의를 보내주세요.</p>
        </div>

        <div className="contactBox">
          <form>
            <label>이름</label>
            <input type="text" placeholder="Your Name" />

            <label>이메일</label>
            <input type="email" placeholder="Your Email" />

            <label>문의 내용</label>
            <textarea rows={5} placeholder="Your Message"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </ContactWrap>
    </SubLayout>
  );
}
