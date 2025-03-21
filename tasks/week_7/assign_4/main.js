const tasks = [
    {
        title: "Do laundry",
        completed: true,
        priority: "medium",   
    },
    {
        title: "Study JavaScript",
        completed: false,
        priority: "high",
    
    },
    {
        title: "Buy groceries",
        completed: false,
        priority: "low",
    },
    {
        title: "Go to the gym",
        completed: false,
        priority: "medium",
    },
];
let medium=tasks.reduce((acc,ele)=>ele.priority==="medium"?acc+1:acc,0)
let low=tasks.reduce((acc,ele)=>ele.priority==="low"?acc+1:acc,0)
let high=tasks.reduce((acc,ele)=>ele.priority==="high"?acc+1:acc,0)
const modifyTasks ={
    medium:medium,
    low:low,
    high:high,
};
console.log(modifyTasks);