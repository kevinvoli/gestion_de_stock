import ComposeModal from "@/components/widgets/composeModal";


export default function Mailbox(){

  return (
    <>
           <div className="content-wrapper">
        {/* <!-- Content Header (Page header) --> */}
        <section className="content-header no-margin">
          <h1 className="text-center">
            Mailbox
          </h1>
        </section>

        {/* <!-- Main content --> */}
        <section className="content">
          {/* <!-- MAILBOX BEGIN --> */}
          <div className="mailbox row">
            <div className="col-xs-12">
              <div className="box box-solid">
                <div className="box-body">
                  <div className="row">
                    <div className="col-md-3 col-sm-4">
                      {/* <!-- BOXES are complex enough to move the .box-header around. */}
                                {/* This is an example of having the box header within the box body --> */}
                      <div className="box-header">
                        <i className="fa fa-inbox"></i>
                        <h3 className="box-title">INBOX</h3>
                      </div>
                      {/* <!-- compose message btn --> */}
                      <a className="btn btn-block btn-primary" data-toggle="modal" data-target="#compose-modal"><i className="fa fa-pencil"></i> Compose Message</a>
                      {/* <!-- Navigation - folders--> */}
                      <div style={{marginTop: "15px"}}>
                        <ul className="nav nav-pills nav-stacked">
                          <li className="header">Folders</li>
                          <li className="active"><a href="#"><i className="fa fa-inbox"></i> Inbox (14)</a></li>
                          <li><a href="#"><i className="fa fa-pencil-square-o"></i> Drafts</a></li>
                          <li><a href="#"><i className="fa fa-mail-forward"></i> Sent</a></li>
                          <li><a href="#"><i className="fa fa-star"></i> Starred</a></li>
                          <li><a href="#"><i className="fa fa-folder"></i> Junk</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* <!-- /.col (LEFT) --> */}
                    <div className="col-md-9 col-sm-8">
                      <div className="row pad">
                        <div className="col-sm-6">
                          <label style={{marginRight: "10px"}}>
                            <input type="checkbox" id="check-all"/>
                          </label>
                          {/* <!-- Action button --> */}
                          <div className="btn-group">
                            <button type="button" className="btn btn-default btn-sm btn-flat dropdown-toggle" data-toggle="dropdown">
                              Action <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu" role="menu">
                              <li><a href="#">Mark as read</a></li>
                              <li><a href="#">Mark as unread</a></li>
                              <li className="divider"></li>
                              <li><a href="#">Move to junk</a></li>
                              <li className="divider"></li>
                              <li><a href="#">Delete</a></li>
                            </ul>
                          </div>

                        </div>
                        <div className="col-sm-6 search-form">
                          <form action="#" className="text-right">
                            <div className="input-group">
                              <input type="text" className="form-control input-sm" placeholder="Search"/>
                              <div className="input-group-btn">
                                <button type="submit" name="q" className="btn btn-sm btn-primary"><i className="fa fa-search"></i></button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      {/* <!-- /.row --> */}

                      <div className="table-responsive">
                        {/* <!-- THE MESSAGES --> */}
                        <table className="table table-mailbox">
                          <tr className="unread">
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr className="unread">
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr className="unread">
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr className="unread">
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                          <tr>
                            <td className="small-col"><input type="checkbox" /></td>
                            <td className="small-col"><i className="fa fa-star-o"></i></td>
                            <td className="name"><a href="#">John Doe</a></td>
                            <td className="subject"><a href="#">Urgent! Please read</a></td>
                            <td className="time">12:30 PM</td>
                          </tr>
                        </table>
                      </div>
                      {/* <!-- /.table-responsive --> */}
                    </div>
                    {/* <!-- /.col (RIGHT) --> */}
                  </div>
                  {/* <!-- /.row --> */}
                </div>
                {/* <!-- /.box-body --> */}
                <div className="box-footer clearfix">
                  <div className="pull-right">
                    <small>Showing 1-12/1,240</small>
                    <button className="btn btn-xs btn-primary"><i className="fa fa-caret-left"></i></button>
                    <button className="btn btn-xs btn-primary"><i className="fa fa-caret-right"></i></button>
                  </div>
                </div>
                {/* <!-- box-footer --> */}
              </div>
              {/* <!-- /.box --> */}
            </div>
            {/* <!-- /.col (MAIN) --> */}
          </div>
          {/* <!-- MAILBOX END --> */}

        </section>
        {/* <!-- /.content --> */}
      </div>
      {/* <!-- /.content-wrapper --> */}
 
 
      <ComposeModal/>
 

    </>
  )
}

 