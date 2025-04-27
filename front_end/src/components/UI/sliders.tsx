import CustomSliders from "./muiSlider";




export default function Sliders(){
  return (
    
    <div className="content-wrapper">
    {/* <!-- Content Header (Page header) --> */}
    <section className="content-header">
      <h1>
        Sliders
        <small>range sliders</small>
      </h1>
      <ol className="breadcrumb">
        <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">UI</a></li>
        <li className="active">Sliders</li>
      </ol>
    </section>

    {/* <!-- Main content --> */}
    <CustomSliders/>
    {/* <!-- /.content --> */}
  </div>


  )
}
