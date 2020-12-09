# Slot machine con Phaser 2.15.0 CE
Se deberá crear una aplicación con:
- Phaser2.15.0CE
- UtilizarmodoAUTO(Canvas/WebGL)paraelpintado.
- Debefuncionarennavegadoreswebdeescritorioymóviles.

Splash Screen
- Debe de presentar un texto e imagen centrado.
- Debe cargar los assets.
- Una vez finaliza la carga, pasar a la pantalla principal.

Pantalla principal
- Un reloj, que se pintará desde una llamada REST a http://worldtimeapi.org/api/ip al entrar en la escena.
- 3 carriles simulando una máquina tragaperras, donde deben aparecer diferentes símbolos.
- 1 botón “Spin”, que al pulsarlo hará girar durante 3 segundos los símbolos de los carriles verti-
calmente, arrancando y deteniendo de izquierda a derecha en un intervalo de 0,5 segundos donde debe realizar una parada de símbolos aleatoria.
  

# Arrancar proyecto
1. Instalar node.js y NPM.
2. Instalar los paquetes necesarios en la carpeta raíz con:
~~~
npm i
~~~
3. Instalar http-server con:
~~~
sudo npm install --global http-server
~~~


3. Arrancar el proyecto con 'http-server' en la carpeta raíz, debe aparece:

Starting up http-server, serving .

Available on:

http://127.0.0.1:8080

http://192.168.1.44:8080