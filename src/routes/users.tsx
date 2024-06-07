import { cache, createAsync } from "@solidjs/router";
import { clientOnly } from "@solidjs/start";
import { Suspense } from "solid-js";
import { getUsers } from "~/db/user/queries/get-users";

import { Heading } from "~/ui/heading";

const UsersTable = clientOnly(() => import("~/modules/users/users.table"));

// const fetchUsers = cache(async () => {
//   return getUsers();
// }, "users");

// export const route = {
//   load: () => fetchUsers(),
// };

export default function Users() {
  const users = createAsync(() => getUsers());

  return (
    <div>
      <Heading>Users</Heading>
      <Suspense>
        <UsersTable users={users} />
      </Suspense>
    </div>
  );
}
