

export default function Errors500(){

  return (
    <>
          <div  className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section  className="content-header">
          <h1>
            500 Error Page
          </h1>
          <ol  className="breadcrumb">
            <li><a href="#"><i  className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li  className="active">500 error</li>
          </ol>
        </section>

        {/* <!-- Main content --> */}
        <section  className="content">

          <div  className="error-page">
            <h2  className="headline text-red">500</h2>
            <div  className="error-content">
              <h3><i  className="fa fa-warning text-red"></i> Oops! Something went wrong.</h3>
              <p>
                We will work on fixing that right away.
                Meanwhile, you may <a href='../../index.html'>return to dashboard</a> or try using the search form.
              </p>
              <form  className='search-form'>
                <div  className='input-group'>
                  <input type="text" name="search"  className='form-control' placeholder="Search"/>
                  <div  className="input-group-btn">
                    <button type="submit" name="submit"  className="btn btn-danger btn-flat"><i  className="fa fa-search"></i></button>
                  </div>
                </div>
                {/* <!-- /.input-group --> */}
              </form>
            </div>
          </div>
          {/* <!-- /.error-page --> */}

        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}

    </>
  )
}

  