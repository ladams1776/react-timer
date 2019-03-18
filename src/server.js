const express = require ('express');
const app = express();

app.listen(3001, function () {
    console.log();
});

app.get("/task", function (req, res) {
    //@todo: simulate db
    res.json([
        {
            description: "Optimizing and setting up SEO",
            customer: "Acme Corp",
            contract: "Search Engine Optimization",
            key: 0,
            time: 3.33
        },
        {
            description: "Running usability tests",
            customer: "Wonka Industries",
            contract: "Usability",
            key: 1,
            time: 3.33
        },
        {
            description: "Speeding up landing pages loading time",
            customer: "Stark Industries",
            contract: "Speed and Performance",
            key: 2,
            time: 1.33
        },
        {
            description: "Running usability tests",
            customer: "Ollivanders Wand Shop",
            contract: "ANalytics",
            key: 3,
            time: 1.66
        }
    ]);
});