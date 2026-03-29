import College from "./contextApi/College";
import { SubjectConstextApi } from "./contextApi/SubjectContext";



function App(){

  
  return(
<SubjectConstextApi.Provider value={"12"}> 
  <College />
</SubjectConstextApi.Provider>
   

  
  )
}

export default App;