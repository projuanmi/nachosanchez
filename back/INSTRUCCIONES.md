# 🌱 Guía de configuración — Encuesta Música y Plantas

## Archivos del proyecto

```
encuesta-musica-plantas/
├── index.html              ← La página web (encuesta + gráficas)
├── google-apps-script.js   ← El código del backend (Google Sheets)
└── INSTRUCCIONES.md        ← Este archivo
```

---

## Paso 1 — Crear el backend en Google Sheets (gratis)

1. Abre [Google Sheets](https://sheets.google.com) y crea una hoja nueva  
   (ponle un nombre, ej: *"Encuesta Música Plantas"*)

2. Con esa hoja abierta, ve al menú:  
   **Extensiones → Apps Script**

3. Se abrirá un editor de código. **Borra todo** el contenido existente.

4. Abre el archivo `google-apps-script.js` de este proyecto y **copia todo su contenido**.

5. Pégalo en el editor de Apps Script y guarda con **Ctrl+S**.

6. Haz clic en **"Implementar" → "Nueva implementación"**

7. Configura así:
   - **Tipo**: Aplicación web
   - **Ejecutar como**: Yo (tu cuenta de Google)
   - **Quién tiene acceso**: Cualquier usuario

8. Haz clic en **"Implementar"** → te pedirá permisos → **Acepta todo**

9. Te dará una **URL** que empieza por `https://script.google.com/macros/s/...`  
   ¡Cópiala!

---

## Paso 2 — Conectar la web con Google Sheets

1. Abre el archivo `index.html` con cualquier editor de texto  
   (Bloc de notas, VSCode, etc.)

2. Busca esta línea (está cerca del final, en el `<script>`):
   ```javascript
   const SCRIPT_URL = 'TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUÍ';
   ```

3. Reemplaza `TU_URL_DE_GOOGLE_APPS_SCRIPT_AQUÍ` con la URL que copiaste:
   ```javascript
   const SCRIPT_URL = 'https://script.google.com/macros/s/XXXXXXXX/exec';
   ```

4. Guarda el archivo.

---

## Paso 3 — Publicar en GitHub Pages (gratis)

1. Crea una cuenta en [github.com](https://github.com) si no tienes una

2. Crea un repositorio nuevo → ponle un nombre, ej: `encuesta-musica`

3. Sube solo el archivo `index.html`  
   (arrastra el archivo a la página del repositorio)

4. Ve a **Settings → Pages**

5. En "Branch", selecciona **main** y haz clic en **Save**

6. En unos segundos tendrás una URL pública del tipo:  
   `https://TU_USUARIO.github.io/encuesta-musica/`

7. ¡Comparte esa URL con tus compañeros!

---

## ¿Cómo ver los resultados?

- **En la web**: pestaña "Resultados" — se actualiza en tiempo real
- **En Google Sheets**: todas las respuestas aparecen en la hoja "Respuestas" con columnas organizadas

---

## Modo demo (sin configurar)

Si todavía no has configurado Google Sheets, la encuesta funciona en **modo demo**:  
los datos se guardan en el navegador (*localStorage*) y los gráficos se actualizan localmente.  
Sirve para probar, pero los datos no se comparten entre dispositivos.

---

## ¿Preguntas?

El proyecto incluye estas preguntas en la encuesta:

| Pregunta | Tipo |
|----------|------|
| Edad y curso | Número / desplegable |
| Género del encuestado | Radio |
| Género musical favorito (Rock / Reggaetón) | Radio |
| Horas de música al día | Deslizador |
| Efectos de la música en el estado de ánimo | Casillas múltiples |
| ¿Creen que la música afecta a las plantas? | Radio |
| ¿Qué música favorece más el crecimiento? | Radio |
| Interés por la ciencia (1-10) | Deslizador |
| ¿Tienen plantas en casa? | Radio |
| Comentario libre | Texto |

Las **gráficas de dona** muestran:
- Rock vs Reggaetón (preferencia musical)
- Rock vs Reggaetón (para las plantas)
- Creencia sobre el efecto de la música

El **gráfico de barras** muestra los efectos emocionales de la música.
