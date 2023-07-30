import { Route,Routes } from "react-router-dom";

import { ShowReact } from '../pages/react/react';
import { ShowOneReact } from "../pages/react/articles/one/one";

import { ShowCpp } from '../pages/cpp/cpp';

import { ShowNodejs } from '../pages/nodejs/nodejs';
import { ShowOneNodejs } from '../pages/nodejs/articles/one/one';
import { ShowTwoNodejs } from "../pages/nodejs/articles/two/two";

import { ShowRust } from '../pages/rust/rust';
import { ShowOneRust } from "../pages/rust/articles/one/one";
import { ShowTwoRust } from "../pages/rust/articles/two/two";
import { ShowThreeRust } from "../pages/rust/articles/three/three";
import { ShowFourRust } from "../pages/rust/articles/four/four";
import { ShowAlu } from "../pages/more/ALU/alu";


import { ShowBooks } from '../pages/books/books'
import { ShowMain } from '../pages/main/ShowMain';
import { NotFound } from "./404";

export const DeclareRoutes = () =>{
    return(
<div>
<Routes>
<Route path="*" element={<NotFound />}/>
<Route path='/nodejs/one' element={<ShowOneNodejs />}/>
<Route path='/nodejs/two' element ={<ShowTwoNodejs />}/>
<Route path='/alu' element ={<ShowAlu />}/>

<Route path='/react/one' element={<ShowOneReact />}/>

<Route path='/rust/one' element ={<ShowOneRust />}/>
<Route path='/rust/two' element ={<ShowTwoRust />}/>
<Route path='/rust/three' element ={<ShowThreeRust />}/>
<Route path='/rust/four' element ={<ShowFourRust />}/>



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