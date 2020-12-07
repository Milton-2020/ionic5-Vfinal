<?php 
/*require_once establece que el código del archivo invocado es requerido, es decir, 
obligatorio para el funcionamiento del programa.*/
require_once "config.php";

//Creamos una clase llamada baseDatos
class BaseDatos
{
    //Agregamos 2 atributos
    private $conexion;  //Almacenará la conexion al servidor de bases de datos
    private $db; //Almacena el valor de la base de datos seleccionada

    /*
    Debido a que los métodos estáticos se pueden invocar sin tener creada una instancia del objeto, 
    la seudovariable $this no está disponible dentro de los métodos declarados como estáticos.
    */
    public static function conectar() 
    {
        //$conexion = mysqli_connect("localhost", "mi_usuario", "mi_contraseña", "mi_bd", "mi_port");
        $conexion = mysqli_connect(host,user,pass,dbname,port);

        //connect_errno: Devuelve el ultimo código de error de la última llamada mysqli_connect().
        if($conexion->connect_errno)
            die("Lo sentimos, no se ha podido establecer la conexión con MySQL/MariaDB: ".mysqli_error($conexion));
        else
        {
            //mysqli_select_db — Selecciona la base de datos por defecto para realizar las consultas
            $db = mysqli_select_db($conexion, dbname);
            if($db == 0)
                die("Lo sentimos, no se ha podido conectar con la base de datos: ".dbname);
        }
        //Retorna el valor obtenido de la conexion
        return $conexion;
    }

    //Método para poder desconectar la conexion
    public function desconectar($conexion)
    {
        //Si la conexion existen entonces cerrarla
        if($conexion) 
            mysqli_close($conexion);
    }
}
?>