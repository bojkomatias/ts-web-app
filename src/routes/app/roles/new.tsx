import { useNavigate } from "@solidjs/router";
import { RoleForm } from "~/modules/roles/role.form";

export default function RolesForm() {
  const navigate = useNavigate();

  return <RoleForm open={true} setOpen={() => navigate("/app/roles")} />;
}
