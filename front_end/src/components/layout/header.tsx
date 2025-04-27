import Navbar from "./navbar";




export default function Header(){

  return (

    <header className="main-header ">
    {/* <!-- Logo --> */}
    <a href="/" className="logo"><b>Admin</b>LTE</a>
    {/* <!-- Header Navbar: style can be found in header.less --> */}
    <Navbar/>
  </header>

  )
}