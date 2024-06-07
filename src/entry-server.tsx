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
				<body class="overflow-y-auto text-default-900 antialiased dark:bg-default-900 dark:lg:bg-default-950 lg:bg-default-100 dark:text-default-100">
					<div id="app">{children}</div>
					{scripts}
				</body>
			</html>
		)}
	/>
))
