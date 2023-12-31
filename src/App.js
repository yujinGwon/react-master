/* eslint-disable */

import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState(''); 

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        <button onClick={()=>{
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }} >글 정렬</button>
      </div>
      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ 함수 }>👍</span> {따봉} </h4>
        <p>2월 17일 발생
          <span onClick={()=>{
            let copy = [...글제목];
            copy[0] = '여자코트 추천';
            글제목변경(copy);
            }}> 변경</span></p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발생</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{ if(modal) {setModal(false)} else {setModal(true)} }}>{ 글제목[2] }</h4>
        <p>2월 17일 발생</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
            <div className="list" key={i}>
            <h4 onClick={()=>{ 
              setModal(true); setTitle(i); }}
              >{ 글제목[i] } 
              <span onClick={(e)=>{
                e.stopPropagation();
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy);
              }}
              >👍</span> {따봉[i]}
              <button onClick={(e)=>{
                e.stopPropagation();
                let copy = [...글제목];
                copy.splice(i,1);
                글제목변경(copy);
              }}>삭제</button>
            </h4>
            <p>2월 17일 발생</p>
          </div>
          )
        })
      }

      <input onChange={(e)=>{ 
        입력값변경(e.target.value);
        console.log(입력값);
        }} />
      
      <button onClick={()=>{
        let copy = [...글제목];
        copy.push(입력값);
        글제목변경(copy);

        let copy2 = [...따봉];
        copy2.push(0);
        따봉변경(copy2);

      }}>추가</button>

      {
        modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목} title={title} /> : null
      }
      
    </div>
  );
}

function Modal(props){
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy = [...props.글제목];
        copy[0] = '여자코트 추천';
        props.글제목변경(copy);
      }} >글수정</button>
    </div>
  )
}

export default App;
