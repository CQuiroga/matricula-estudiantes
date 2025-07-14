DELIMITER //

CREATE PROCEDURE ObtenerEstudiantesPorProfesor(IN profesorId INT)
BEGIN
    SELECT e.nombre AS estudiante, m.nombre AS materia
    FROM profesores p
    JOIN profesor_materias pm ON p.id = pm.profesor_id
    JOIN materias m ON m.id = pm.materia_id
    JOIN inscripcions i ON i.materia_id = m.id
    JOIN estudiantes e ON e.id = i.estudiante_id
    WHERE p.id = profesorId;
END //

DELIMITER ;
