import { Outlet } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer"

export default function Layout(){
    return(
      // <mian></mian>
      <div>
            <Header/>
            <Outlet/>
            <Footer/>
      </div>
    );
}