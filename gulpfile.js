//src para identificar un archivo 
//dest es una funcion que permite almacenarlo
const {src,dest,watch} = require("gulp");

//importamos el bin de sass para sus funcionalidades
const sass = require("gulp-sass")(require('sass'));
const plumber = require("gulp-plumber");


function css(done){
//pipe una accion que se ejecuta despues de otra
src('src/scss/**/*.scss') //Identificar el archivo de SASS
.pipe(plumber())
.pipe(sass()) //Compilarlo
.pipe(dest('build/css')); // Almacenarla en el disco duro

    done(); //Callback que avisa a gulp cuando llegamos al final
}

function dev(done){
    watch('src/scss/**/*.scss',css)
    
    done();
}

exports.css = css;
exports.dev = dev;