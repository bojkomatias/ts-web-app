// @refresh reload
import { StartClient, mount } from "@solidjs/start/client"

if (document.getElementById("app") !== null)
	mount(() => <StartClient />, document.getElementById("app")!)
