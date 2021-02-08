db.auth('admin-user', 'admin-password')

db.tags.insertOne({
    name: 'DDD',
    description: 'Domain Driven Design'
});

db.tags.insertOne({
    name: 'Clean Architecture',
    description: 'Uncle Bob related tag for clean architecture'
});

db.tags.insertOne({
    name: 'Unit Testing',
    description: 'Unit Testing in general'
});

db.tags.insertOne({
    name: 'Architecture',
    description: 'Architecture in general'
});

db.tags.insertOne({
    name: 'Microservices',
    description: 'Related to Microservices'
});

db.tags.insertOne({
    name: 'React Timer App',
    description: 'Related to the React Timer App'
});

db.tags.insertOne({
    name: 'Udemy',
    description: 'Related to a Udemy Course'
});

// PROJECTS
db.projects.insertOne({
    id: 0,
    name: "React Timer App",
});

db.projects.insertOne({
    id: 1,
    name: "Apache Spark",
});

db.projects.insertOne({
    id: 2,
    name: "shell script course",
});

db.projects.insertOne({
    id: 3,
    name: "vim course"
});

db.projects.insertOne({
    id: 4,
    name: "Conference talks"
});