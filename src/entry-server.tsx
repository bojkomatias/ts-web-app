// @refresh reload
import { StartServer, createHandler } from "@solidjs/start/server"

export default createHandler(() => (
	<StartServer
		document={({ assets, children, scripts }) => (
			<html lang="en" class="dark">
				<head>
					<meta charset="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
					<title>Solid Start | Templetazo</title>
					{assets}
				</head>
				<body class="overflow-y-auto text-zinc-900 antialiased dark:bg-zinc-900 dark:lg:bg-zinc-950 lg:bg-zinc-100 dark:text-zinc-100">
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
))
