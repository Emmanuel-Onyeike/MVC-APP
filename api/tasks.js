// This is the Controller/Model logic combined for the demo
let tasks = [
    { id: 1, title: "Initialize System", status: "Complete" },
    { id: 2, title: "Deploy MVC to Vercel", status: "In Progress" }
];

export default function handler(req, res) {
    if (req.method === 'GET') {
        return res.status(200).json(tasks);
    } 
    
    if (req.method === 'POST') {
        const newTask = { id: Date.now(), title: req.body.title, status: "Pending" };
        tasks.push(newTask);
        return res.status(201).json(newTask);
    }

    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
}
