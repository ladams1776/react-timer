// db.auth('admin-user', 'admin-password')

// db = db.getSiblingDB('tags')÷

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