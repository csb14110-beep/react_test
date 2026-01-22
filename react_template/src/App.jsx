
import './App.css'
import Header from './components/common/Header'  // 헤더 컴포넌트
import {BrowserRouter, Routes, Route} from 'react-router-dom'  // 라우터 관련 컴포넌트
import Home from './components/Home'  // 홈 페이지
import Features from './components/Features'  // 기능 페이지


// BrowserRouter: 브라우저에 이동을 컨트롤 하는 전체 컴포넌트 -> 최상위 부모
// Routes: 페이지 이동을 위한 컴포넌트 -> 각각의 Route를 감싸는 부모
// Route: 각 페이지 이동의 속성을 지정하는 컴포넌트
// Link: 페이지 이동을 위해 클릭되는 대상 요소에 지정한다 

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
