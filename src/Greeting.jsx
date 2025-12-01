function Greeting(){
    const userName="Иван";
    const currentHour=new Date().getHours();
    let TimeofDay;
    if (currentHour<12){
        TimeofDay="Доброе утро";
    } else if (currentHour<18){
        TimeofDay="Добрый день";
    } else{
        TimeofDay="Добрый вечер";
    }
    return(
        <div className="greeting">
            <h1>{TimeofDay}, {userName}!</h1>
            <p>Рады видеть в нашем приложении!</p>
           </div>)
    };
export default Greeting;