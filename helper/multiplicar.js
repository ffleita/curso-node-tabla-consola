const fs = require('fs');
require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }
        if ( listar ) {
            console.log('==================='.red);
            console.log(`Tabla del: ${base} hasta ${hasta}`.white);
            console.log('==================='.red);
            console.log(salida.cyan);
        }

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, () => {});

        return `tabla-${base}.txt`;
    } catch ( err ) {
        throw err;
    }

    // return new Promise( (resolve, reject) => {
    //     console.log('-------------------');
    //     console.log('    Tabla del: ', base);
    //     console.log('-------------------');
        
    //     let salida = '';
    //     for (let i = 1; i < 11; i++) {
    //         salida += `${base} x ${i} = ${base * i}\n`;
    //     }

    //     console.log(salida);

    //     fs.writeFile(`tabla-${base}`, salida, () => {});

    //     resolve(`tabla-${base}.txt`);
    // });
}

module.exports = {
    crearArchivo
}