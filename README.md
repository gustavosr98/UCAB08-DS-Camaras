# Problema planteado

Los fotografos de la vieja escuela han tenido que mejorar sus tecnicas para la captura de esas imagenes que pasan a la historia. Los modelos de cámaras mas antiguos ofrecían la funcionalidad básica para capturar imagen. Hoy en día las cámaras de fabricantes como Cannon y Sony añaden nuevas funcionalidades que permiten configurar la saturación de imagen, contraste y brillo antes de capturar la imagen. Un fotografo de la vieja escuela podria decir que: “las cámaras actuales hacen lo mismo que las viejas solo que pueden ser ajustadas antes de tomar la foto”. Esta última aseveración es delicada debe tenerse en cuenta que cada fabricante es independiente de realizar los ajustes de acuerdo al hardware de cada equipo, sin embargo capturar la imagen es identico a como lo realizan las camaras de vieja data. Tomando en consideración esta situación plantear a través de un diagrama de clases indicando cuáles patrones de diseño pudieran ser implementados para solventar esta situación. Considere incorporar un diagrama de secuencias que muestre la interacción entre los objetos que formen parte de la solución propuesta.

## Formato de Evaluación

- El estudiante debe compartir el URL correspondiente al repositorio donde se aloja el codigo fuente para la implementación de la solución propuesta.
    - Considere incluir en este repositorio aquellos elementos graficos necesarios para documentar el diseño aplicado.
- La tarea debe ser realizada en grupos de 3 estudiantes, recuerde identificar los autores en el documento.

# Respuestas
## Integrantes
- Javier Andrade 
- Gustavo Sánchez
- Yeisson Venencia

## Para correr el código
1. ``` npm i ```
2. ``` npm run start ```

## Diagrama de clases
Ubicado en /src/assets/DiagramaClases.png  

<p align="center">
  <img 
  alt="DiagramaClases"
  src="/src/assets/DiagramaClases.png">
</p>

En este diagrama de clases se puede observar la implementación del patrón de **Factory** como patrón creacional utilizado para la instanciación de `Cameras` de difentes marcas. Al mismo tiempo se puede observar el patrón **Template Method** para definir el comportamiento de `CameraTarget` y también del `Photographer`.

## Diagrama de secuencia
Ubicado en /src/assets/DiagramaSecuencia.png  

<p align="center">
  <img 
  alt="DiagramaSecuencia"
  src="/src/assets/DiagramaSecuencia.png">
</p>