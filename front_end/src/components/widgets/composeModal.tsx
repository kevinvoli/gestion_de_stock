


export default function ComposeModal(){

  return (
    <>
         {/* <!-- COMPOSE MESSAGE MODAL --> */}
    <div className="modal fade" id="compose-modal"
    //  tabindex="-1"
     role="dialog" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
            <h4 className="modal-title"><i className="fa fa-envelope-o"></i> Compose New Message</h4>
          </div>
          <form action="#" method="post">
            <div className="modal-body">
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">TO:</span>
                  <input name="email_to" type="email" className="form-control" placeholder="Email TO"/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">CC:</span>
                  <input name="email_to" type="email" className="form-control" placeholder="Email CC"/>
                </div>
              </div>
              <div className="form-group">
                <div className="input-group">
                  <span className="input-group-addon">BCC:</span>
                  <input name="email_to" type="email" className="form-control" placeholder="Email BCC"/>
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" id="email_message" className="form-control" placeholder="Message" style={{height: "120px"}}></textarea>
              </div>
              <div className="form-group">
                <div className="btn btn-success btn-file">
                  <i className="fa fa-paperclip"></i> Attachment
                  <input type="file" name="attachment"/>
                </div>
                <p className="help-block">Max. 32MB</p>
              </div>

            </div>
            <div className="modal-footer clearfix">

              <button type="button" className="btn btn-danger" data-dismiss="modal"><i className="fa fa-times"></i> Discard</button>

              <button type="submit" className="btn btn-primary pull-left"><i className="fa fa-envelope"></i> Send Message</button>
            </div>
          </form>
        </div>
        {/* <!-- /.modal-content --> */}
      </div>
      {/* <!-- /.modal-dialog --> */}
    </div>
    {/* <!-- /.modal --> */}
    </>

  )
}