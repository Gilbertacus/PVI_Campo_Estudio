// script.js
// Los campos ocupacionales son los siguientes:
// Ciencias Jurídicas (Tiene)
// Ciencias Sociales (Tiene)
// Humanidades (Tiene)
// Ciencias Exactas (Tiene)
// Ciencias de la Tierra y Agropecuarias (Agregar en Quiz 2)
// Ciencias Económicas y Administrativas (Tiene) 
// Artes (Tiene)
// Ciencias Tecnológicas (Tiene)
// Ciencias de la Educación (No tiene)
// Estudios Mediales (No tiene)
// Salud y Bienestar (Tiene)
// Agronomía y Sistemas Naturales (No tiene) 
// Ciencias Biológicas y Química (Tiene)
document.getElementById('submitButton').addEventListener('click', function() {
    const objectType = document.getElementById('objectType').value;
    const taskType = document.getElementById('taskType').value;
    const fieldType = document.getElementById('fieldType').value;

    let result = '';

    if ((objectType === 'hechos' || objectType === 'personas') &&
        (taskType === 'defender' || taskType === 'representar' || taskType === 'exponer') &&
        (fieldType === 'estudios' || fieldType === 'juzgados' || fieldType === 'cortes')) {
        result = 'Ciencias Jurídicas';
    }
    
    if ((objectType === 'fenómenos' || objectType === 'personas') &&
        (['enseñar', 'asesorar', 'diagnosticar', 'cuidar'].includes(taskType)) &&
        (['escuelas', 'equipos de orientación escolar', 'consultorios', 'hospitales'].includes(fieldType))) {
        result = 'Ciencias Sociales';
    }

    if ((objectType === 'hechos' && objectType === 'personas') &&
        (['comunicar', 'viajar', 'reflexionar', 'informar', 'escribir'].includes(taskType)) &&
        (['radios', 'aeropuertos', 'centros de investigación', 'periódicos', 'centros de idiomas'].includes(fieldType))) {
        result = 'Humanidades';
    }

    if ((objectType === 'personas' || objectType === 'datos') &&
        (['curar', 'diagnosticar', 'intervenir', 'analizar', 'prevenir', 'investigar'].includes(taskType)) &&
        (['hospitales', 'clínicas', 'laboratorios', 'consultorios', 'centros de investigación'].includes(fieldType))) {
        result = 'Salud y Bienestar';
    }

    if ((objectType === 'datos' || objectType === 'fenómenos') &&
        (['observar', 'analizar'].includes(taskType)) &&
        (['laboratorios', 'centros de investigación'].includes(fieldType))) {
        result = 'Ciencias Exactas';
    }

    if ((objectType === 'datos' || objectType === 'fenómenos') &&
        (['sintetizar', 'teorizar', 'calcular', 'deducir'].includes(taskType)) &&
        (['investigación', 'servicio meteorológico'].includes(fieldType))) {
        result = 'Ciencias Biológicas y Química';
    }

    if ((objectType === 'datos' || objectType === 'fenómenos') &&
        (['cultivar', 'cosechar'].includes(taskType)) &&
        (['campo', 'granja'].includes(fieldType))) {
        result = 'Ciencias de la Tierra y Agropecuarias';
    }

    if ((objectType === 'datos') &&
        (['calcular', 'administrar', 'organizar', 'dirigir', 'planificar', 'componer'].includes(taskType)) &&
        (['oficinas', 'empresas', 'estudios'].includes(fieldType))) {
        result = 'Ciencias Económicas y Administrativas';
    }

    if ((objectType === 'objetos' || objectType === 'hechos') &&
        (['actuar', 'diseñar', 'representar', 'crear', 'proyectar', 'componer'].includes(taskType)) &&
        (['teatro', 'cine', 'ateliers', 'televisión', 'agencias publicitarias', 'conservatorios'].includes(fieldType))) {
        result = 'Artes';
    }

    if ((objectType === 'objetos') &&
        (['construir', 'diseñar', 'calcular', 'arreglar'].includes(taskType)) &&
        (['fábricas', 'empresas', 'servicios'].includes(fieldType))) {
        result = 'Ciencias Tecnológicas';
    }

    if (['personas', 'datos', 'hechos', 'comunidades'].includes(objectType) &&
        ['enseñar', 'investigar', 'planificar'].includes(taskType) &&
        ['escuelas', 'equipos de orientación escolar'].includes(fieldType)) {
        result = "Ciencias de la Educación"
    }

    if (['personas', 'datos', 'tecnología'].includes(objectType) &&
        ['comunicar', 'analizar', 'innovar'].includes(taskType) && 
        ['televisión', 'agencias publicitarias', 'teatro', 'cine', 'empresas', 'espacios de media digital'].includes(fieldType)) {
        result = "Estudios Mediales"
    }

    if (['fenómenos', 'ecosistemas', 'tecnología', 'comunidades'].includes(objectType) &&
        ['observar', 'analizar', 'cuidar', 'investigar', 'aplicar', 'optimizar', 'acompañar', 'capacitar'].includes(taskType) &&
        ['campo', 'laboratorio', 'lugares rurales', 'granja'].includes(fieldType)) {
        result = "Agronomía y Sistemas Naturales"
    }

    const resultElement = document.getElementById('result');
    if (result) {
        resultElement.textContent = `Tu campo de estudio recomendado es: ${result}`;
    } else {
        resultElement.textContent = 'No se encontró un campo de estudio que coincida con tus elecciones.';
    }
    resultElement.style.display = 'block';
});
