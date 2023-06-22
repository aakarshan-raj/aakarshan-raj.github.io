import { Route,Routes } from "react-router-dom";
import { ShowReact } from '../pages/react/react';
import { ShowCpp } from '../pages/cpp/cpp';
import { ShowNodejs } from '../pages/nodejs/nodejs';
import { ShowRust } from '../pages/rust/rust';
import { ShowBooks } from '../pages/books/books'
import { ShowMain } from '../pages/main/ShowMain';
import { ShowOneNodejs } from '../pages/nodejs/articles/one/one';
import { ShowOneReact } from "../pages/react/articles/one/one";
import { NotFound } from "./404";

export const DeclareRoutes = () =>{
    return(
<div>
<Routes>
<Route path="*" element={<NotFound />}/>
<Route path='/nodejs/one' element={<ShowOneNodejs />}/>
<Route path='/react/one' element={<ShowOneReact />}/>

<Route path='/' element ={<ShowMain />}/>
<Route path='/rust' element ={<ShowRust />}/>
<Route path='/react' element ={<ShowReact />}/>
<Route path='/cpp' element ={<ShowCpp />}/>
<Route path='/books' element ={<ShowBooks />}/>
<Route path='/nodejs' element ={<ShowNodejs />}/>

</Routes>
</div>
    );
}