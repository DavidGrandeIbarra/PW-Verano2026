

git init
Inicializa un nuevo repositorio Git.
Crear un proyecto nuevo y comenzar a controlar versiones. Ejemplo: git init


git clone
Descarga una copia de un repositorio remoto.	
Obtener un proyecto alojado en GitHub. Ejemplo: git clone https://github.com/usuario/proyecto.git

git status	
Muestra el estado actual del repositorio.	
Ver qué archivos fueron modificados antes de hacer un commit. Ejemplo: git status

git add	
Agrega archivos al área de preparación (staging).	
Preparar cambios para un commit. Ejemplo: git add archivo.java

git add .	
Agrega todos los cambios al staging.	
Incluir todos los archivos modificados. Ejemplo: git add .

git commit -m	
Guarda los cambios preparados con un mensaje descriptivo.	
Registrar una nueva versión del proyecto. Ejemplo: git commit -m "Corrige error de login"

git log	
Muestra el historial de commits.	
Revisar cambios realizados anteriormente. Ejemplo: git log

git diff	
Compara cambios entre versiones.	
Ver qué líneas fueron modificadas antes de hacer commit. Ejemplo: git diff

git branch	L
ista o crea ramas.	
Ver ramas disponibles. Ejemplo: git branch

git branch nombre-rama	
Crea una nueva rama.	
Desarrollar una nueva funcionalidad sin afectar la principal. Ejemplo: git branch desarrollo

git checkout nombre-rama	
Cambia a una rama existente.	
Trabajar en otra versión del proyecto. Ejemplo: git checkout desarrollo

git switch nombre-rama	
Forma moderna de cambiar de rama.	
Cambiar a una rama de forma más intuitiva. Ejemplo: git switch desarrollo

git checkout -b nombre-rama	
Crea y cambia a una nueva rama.	
Iniciar rápidamente una nueva característica. Ejemplo: git checkout -b feature-login

git merge rama	
Fusiona una rama con la actual.	
Integrar una funcionalidad terminada a la rama principal. Ejemplo: git merge desarrollo

git remote -v	
Muestra los repositorios remotos configurados.	
Verificar la URL de GitHub asociada. Ejemplo: git remote -v

git push	
Envía commits al repositorio remoto.	
Subir cambios a GitHub. Ejemplo: git push origin main

git pull	D
escarga y fusiona cambios del repositorio remoto.	
Actualizar el proyecto local. Ejemplo: git pull origin main

git fetch	
Descarga cambios remotos sin fusionarlos.	
Revisar actualizaciones antes de integrarlas. Ejemplo: git fetch origin

git reset --hard HEAD	
Descarta cambios locales no confirmados.	
Volver al último commit guardado. Ejemplo: git reset --hard HEAD

git rm archivo	
Elimina un archivo y registra la eliminación.	
Borrar archivos obsoletos del proyecto. Ejemplo: git rm prueba.txt


