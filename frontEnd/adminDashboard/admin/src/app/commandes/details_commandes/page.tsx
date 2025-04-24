



export default function  AddUser () {

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Utilisateurs
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">Utilisateurs</a></li>
                    <li className="active"> Listes</li>
                </ol>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                            
                        <div className="box-header">
                        <h3 className="box-title">Ajouter</h3>
                        </div>
                        <form role="form">
                        <div className="box-body">
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Nom</label>
                                    <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre nom" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputEmail1">Prénom</label>
                                    <input type="name" className="form-control" id="exampleInputEmail1" placeholder="Entrer votre prénom" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputPassword1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Entrer votre email" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="exampleInputPassword2">Mot de passe</label>
                                    <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Password" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md-12">
                                    <label htmlFor="exampleInputPassword1">Role</label>
                                    <input type="name" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>
                            </div>
                            {/* <div className="form-group">
                            <label htmlFor="exampleInputFile">File input</label>
                            <input type="file" id="exampleInputFile" />
                            <p className="help-block">Example block-level help text here.</p>
                            </div>
                            <div className="checkbox">
                            <label htmlFor="">
                                <input type="checkbox" /> 
                            </label>
                            </div> */}
                        </div>

                        <div className="box-footer">
                            <button type="submit" className="btn btn-primary">Ajouter</button>
                        </div>
                        </form>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

