function watch()
{
    function setHourBySeconds (seconds)
    {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {hour12: false, timeZone: 'UTC'});
    }
    //console.log(setHourBySeconds(10));
    const watch = document.querySelector('.watch');
    const start = document.querySelector('.start');
    const pause = document.querySelector('.pause');
    const reset = document.querySelector('.reset');
    let seconds = 0;
    let timer;
    function startWatch()
    {
        timer = setInterval(function()
        {
            seconds++;
            watch.innerHTML = setHourBySeconds(seconds);
        }, 1000);
    }
    start.addEventListener('click', function(event) 
    {
        watch.classList.remove('paused');
        clearInterval(timer);
        startWatch();
    });
    pause.addEventListener('click', function(event) 
    {
        watch.classList.add('paused');
        clearInterval(timer);
    });
    reset.addEventListener('click', function(event) 
    {
        watch.classList.remove('paused');
        clearInterval(timer);
        watch.innerHTML = '00:00:00';
        seconds = 0;
    });
}
watch();
