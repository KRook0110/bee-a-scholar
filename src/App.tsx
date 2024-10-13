// import './App.css'
import '@/App.css'

import ScholarCard from './components/ScholarCard';
import CategoryContainer from './components/CategoryContainer';


function App() {

  return (
    <>
            {/* <h1 className="text-3xl">Hello, World</h1> */}
        <CategoryContainer imageURL="/images/category_vectors/academic_category.svg" bodyText="test"/>     
    </>
  )
}

export default App;
