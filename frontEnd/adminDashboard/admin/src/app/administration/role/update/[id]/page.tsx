'use client'
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

import { getOne, useAddData, useFetchData } from "@/hooks/useFetchData";
import { Permission, Ressources, Role } from "@/types/model/entity";
import { RequestData } from "@/types/api/endpoint";
import TableRolePermission from "@/components/tables/tableRolePermission";


const rolesRequest = new RequestData("authService", "roles");
const ressourcesRequest = new RequestData("authService", "ressources");
const rolePermissionRequest = new RequestData("authService", "rolepermission");


export default function UpdateRole() {
    const params = useParams();
    const { id } = params as { id: string };
    const { addData, loading: loadupdate, error: errorupdate } = useAddData();
    const [role, setRole] = useState<Role>();
    const [allRessources, setAllRessources] = useState<Ressources[]>([]);
    const { data: fetchedRessources } = useFetchData<Ressources[]>(ressourcesRequest.endpoint.GET(), "GET");
    const { data: fetchedRole } = getOne<Role>(rolesRequest.endpoint.GETONE(id), "GET");

    useEffect(() => {
        if (fetchedRessources) {
            setAllRessources(fetchedRessources);
        }
        if (fetchedRole) {
            setRole(fetchedRole);
        }
    }, [fetchedRessources, fetchedRole]);

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (role) {
            const updatedRole = {
                ...role,
                permissions: role.permissions?.map(p => p.id) // On garde uniquement les IDs ici
            };
            await addData(rolePermissionRequest.endpoint.PAtCH(id), "PATCH", "/administration/role", updatedRole);
        }
    };
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRole((prev) => ({
            ...prev!,
            [name]: value,
        }));
    };

    const handlePermissionToggle = (permission: Permission) => {
        if (!role) return;
        const exists = role.permissions?.some(p => p.id === permission.id);
        const updatedPermissions = exists
            ? role.permissions?.filter(p => p.id !== permission.id)
            : [...(role.permissions || []), permission];

        setRole(prev => ({
            ...prev!,
            permissions: updatedPermissions
        }));
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <h1>
                    Utilisateurs
                    <small>Panneau de contrôle des utilisateurs</small>
                </h1>
                <ol className="breadcrumb">
                    <li><a href="#"><i className="fa fa-dashboard"></i> Accueil</a></li>
                    <li><a href="#">Mise à jour</a></li>
                    <li className="active">Rôle</li>
                </ol>
            </section>
            <section className="content">
                <div className="col-xs-12">
                    <div className="box box-primary">
                        <div className="box-header">
                            <h3 className="box-title">Mise à jour du rôle</h3>
                        </div>
                        <form id="formRole" onSubmit={handleUpdate}>
                            <div className="box-body">
                                <div className="content-in">
                                    <div className="tab_cadre" id="cadre_francais">
                                        <label htmlFor="inputlibelle_fr" className="requis"><b>Libellé (FR)</b></label>
                                        <input
                                            type="text"
                                            id="inputlibelle_fr"
                                            name="nom"
                                            value={role?.nom || ""}
                                            onChange={handleChange}
                                            className="Flat green skin checkbox"
                                        />
                                    </div>

                                    <br />

                                    <table className="table table-bordered table-hover">
                                        {allRessources.map((ressource) => (
                                            <tbody key={ressource.id}>
                                                <tr>
                                                    <th className="l220">{ressource.nom}</th>
                                                    {ressource.permission?.map((permission) => (
                                                        <th key={permission.id} className="l60">{permission.action}</th>
                                                    ))}
                                                </tr>
                                                <tr>
                                                    <td>Autorisation</td>
                                                    {ressource.permission?.map((permission) => {
                                                        const isChecked = role?.permissions?.some(p => p.id === permission.id);
                                                        return (
                                                            <td key={permission.id}>
                                                                <div className="form-group">
                                                                    <label htmlFor={`perm_${permission.id}`}>
                                                                        <input
                                                                            type="checkbox"
                                                                            id={`perm_${permission.id}`}
                                                                            name={`perm_${permission.id}`}
                                                                            checked={isChecked}
                                                                            onChange={() => handlePermissionToggle(permission)}
                                                                            className="flat-red"
                                                                        />
                                                                    </label>
                                                                </div>
                                                            </td>
                                                        );
                                                    })}
                                                </tr>
                                            </tbody>
                                        ))}
                                    </table>

                                    <br />

                                    <label htmlFor="statut" className="l300">
                                        <div className="slideCheckBoxSquare">
                                            <input
                                                type="checkbox"
                                                id="statut"
                                                name="statut"
                                                // checked={role?.statut === 1}
                                                onChange={(e) => setRole((prev) => ({
                                                    ...prev!,
                                                    statut: e.target.checked ? 1 : 0
                                                }))}
                                            />
                                            <span></span>
                                        </div>
                                        Statut (activé/désactivé)
                                    </label>

                                    <br />

                                    <div className="form-actions">
                                        <button type="submit" className="btn-bleu l150">
                                            <i className="fa fa-floppy-o"></i> Enregistrer
                                        </button>
                                        <button type="button" className="btn_reset l150 lien_ajax">
                                            <i className="fa fa-ban"></i> Annuler
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
