
import Header from "./components/Header"
function App() {
   //Antes del return cualquier codigo javascript



  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10"> 
       <Header />
       
      <input  
        type='range'
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-500"
      />
    </div>
  )
}

export default App
