const http = require("http");
const mysql = require("mysql2/promise");

const db = mysql.createPool({
    host: "database",
    user: "root",
    password: "rootpassword",
    database: "college_portal"
});

const server = http.createServer(async (req, res) => {

    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    try {

        if (req.url === "/api/students") {

            const [rows] = await db.query(
                "SELECT * FROM students"
            );

            res.end(JSON.stringify(rows));

        } else if (req.url === "/api/courses") {

            const [rows] = await db.query(
                "SELECT * FROM courses"
            );

            res.end(JSON.stringify(rows));

        } else if (req.url === "/api/marks") {

            const [rows] = await db.query(`
                SELECT 
                    courses.name AS subject,
                    marks.mark
                FROM marks
                JOIN courses ON marks.course_id = courses.id
            `);

            res.end(JSON.stringify(rows));

        } else if (req.url === "/api/attendance") {

            const [rows] = await db.query(`
                SELECT 
                    courses.name AS subject,
                    attendance.percentage
                FROM attendance
                JOIN courses ON attendance.course_id = courses.id
            `);

            res.end(JSON.stringify(rows));

        } else if (req.url === "/api/notices") {

            const [rows] = await db.query(
                "SELECT * FROM notices"
            );

            res.end(JSON.stringify(rows));

        } else {

            res.end(JSON.stringify({
                message: "College Portal Backend is working!",
                database: "Connected",
                availableAPIs: [
                    "/api/students",
                    "/api/courses",
                    "/api/marks",
                    "/api/attendance",
                    "/api/notices"
                ]
            }));

        }

    } catch (error) {

        console.error(error);

        res.writeHead(500, {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        });

        res.end(JSON.stringify({
            error: "Database connection or query failed"
        }));

    }

});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`College Portal Backend running on port ${PORT}`);
});