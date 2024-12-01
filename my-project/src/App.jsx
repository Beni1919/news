
import './App.css'
import HomeNew from './modules/home_new/home_new'
import HomeHighlighted from './modules/home_new/home_highlighted'
import Nav from './modules/nav/nav'

function App() {
  
  return (
    <div id='app-container' className='grid grid-cols-12 gap-2'>
      <div id='nav-container' className='col-span-12 h-fit'>
        <Nav/>
      </div>
      <div id='border-box-left' className='row-span-4 row-start-2 col-start-1 col-span-2'></div>
      <div id='highlight-news-conatainer' className='row-span-4 col-start-3 col-span-2 row-start-2'>
        <HomeHighlighted/>
      </div>
      <div id='small-news-container' className='col-span-6 row-span-4 col-start-5 row-start-2 flex flex-wrap justify-center'>
        <HomeNew/>
        <HomeNew/>
        <HomeNew/>
        <HomeNew/>
        <HomeNew/>
        <HomeNew/>
      </div>
      <div id='border-box-right' className='row-span-4 col-start-11 col-span-2 row-start-2'></div>
    </div> 
  )
}

export default App
