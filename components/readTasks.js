import { createTask } from './addTask.js';
import dateElement from './dateElement.js';
import { uniqueDate,orderDate } from '../services/date.js';

export const displayTasks = () => {
    
    const list= document.querySelector('[data-list]')
    const tasksList = JSON.parse(localStorage.getItem("tasks")) || [ ];
    
    const dates = uniqueDate(tasksList)
    
    const order = orderDate(dates)
    

    dates.forEach(date => {
       

        const dateMoment= moment(date, "DD/MM/AAAA")
        list.appendChild(dateElement(date))

        tasksList.forEach((task) => {
            const taskDate = moment(task.dateFormat,"DD/MM/AAAA")
            
            const diff= dateMoment.diff(taskDate)
          
            if (diff === 0 ){
            list.appendChild(createTask(task)) 
            }
            
    })
    
    
        
    });
}