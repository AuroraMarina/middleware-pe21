# PE-2.1 Configuración y primer servicio middleware con Node.js

## Escenario (a) - Sin API Key

### Comando

```bash
curl http://localhost:3000/health
```

### Salida

```json
{"error":"API key inválida o ausente"}
```

### Explicación

La petición fue rechazada por el middleware de autenticación porque no se envió la cabecera `x-api-key`. El servidor respondió con un error 401 (Unauthorized).

---

## Escenario (b) - Con API Key válida

### Comando

```bash
curl.exe -H "x-api-key: secreto-demo" http://localhost:3000/health
```

### Salida

```json
{"status":"ok","ts":"2026-06-11T19:16:53.463Z"}
```

### Explicación

La API Key enviada es válida, por lo que el middleware permitió el acceso a la ruta `/health`. El servidor respondió correctamente con estado 200 (OK).

---

## Escenario (c) - Ruta inexistente

### Comando

```bash
curl.exe -H "x-api-key: secreto-demo" http://localhost:3000/noexiste
```

### Salida

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET /noexiste</pre>
</body>
</html>
```

### Explicación

La autenticación fue exitosa, pero la ruta solicitada no existe en la aplicación. Express devolvió un error 404 (Not Found).

---

## Verificación de compilación

### Comando

```bash
npx tsc --noEmit
```

### Resultado

La compilación finalizó sin errores.

### Explicación

Se verificó que el proyecto TypeScript compila correctamente y cumple con los requisitos de la práctica.

```
```
