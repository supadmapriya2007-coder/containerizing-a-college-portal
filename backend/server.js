const http = require("http");

const students = [
    {
        id: 1,
        name: "Student 1",
        course: "Computer Science",
        semester: 6
    }
];

const courses = [
    {
        code: "CS301",
        name: "Web Development"
    },
    {
        code: "CS302",
        name: "Database Management"
    },
    {
        code: "CS303",
        name: "Cloud Computing"
    },
    {
        code: "CS304",
        name: "Cyber Security"
    }
];

const marks = [
    {
        subject: "Web Development",
        mark: 85
    },
    {
        subject: "Database Management",
        mark: 78
    },
    {
        subject: "Cloud Computing",
        mark: 88
    },
    {
        subject: "Cyber Security",
        mark: 82
    }
];

const attendance = [
    {
        subject: "Web Development",
        percentage: 92
    },
    {
        subject: "Database Management",
        percentage: 88
    },
    {
        subject: "Cloud Computing",
        percentage: 95
    },
    {
        subject: "Cyber Security",
        percentage: 90
    }
];

const notices = [
    {
        title: "Semester Examination",
        message: "The semester examination timetable will be published soon."
    },
    {
        title: "College Event",
        message: "Annual college cultural event registrations are now open."
    }
];

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    });

    if (req.url === "/api/students") {
        res.end(JSON.stringify(students));
    }

    else if (req.url === "/api/courses") {
        res.end(JSON.stringify(courses));
    }

    else if (req.url === "/api/marks") {
        res.end(JSON.stringify(marks));
    }

    else if (req.url === "/api/attendance") {
        res.end(JSON.stringify(attendance));
    }

    else if (req.url === "/api/notices") {
        res.end(JSON.stringify(notices));
    }

    else {
        res.end(JSON.stringify({
            message: "College Portal Backend is working!",
            availableAPIs: [
                "/api/students",
                "/api/courses",
                "/api/marks",
                "/api/attendance",
                "/api/notices"
            ]
        }));
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`College Portal Backend running on port ${PORT}`);
});