// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";

if (document.getElementById("app") !== null)
	mount(() => <StartClient />, document.getElementById("app")!);
