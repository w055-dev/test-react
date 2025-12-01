function TaskList(){
    const tasks=[
        {id:1, title:'Изучить JSX', completed: true},
        {id:2, title:'Разобраться с компонентами', completed: true},
        {id:3, title:'Освоить работу с props', completed: true},
        {id:4, title:'Наладить режим сна', completed: false}
    ];
    return(
      <div className="task-list">
          <h2>Список задач</h2>
          <ul>
              {tasks.map(task => (
                  <li
                    key={task.id}
                    className={task.completed? 'completed': 'pending'}
                  >
                      <span>{task.title}</span>
                      {task.completed?'✅' : '⏳'}
                  </li>
                  ))}
          </ul>
      </div>
    );
 }
export default TaskList