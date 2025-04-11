function calc() 
{
    const startDate = document.getElementById("start").value;
    const endYear = (document.getElementById('end').value.split('-'))[0]; // only need the year from end date

    const startArr = startDate.split('-');
    const range = Number(endYear) - Number(startArr[0]);
    const day = getDayOfWeek(format(startDate));

    let year = Number(startArr[0]);
    let count = 0;
    let dates = [];

    for(let i = 0; i < range; i++)
    {
        year += 1; // starting year not included

        let dateStr = year + '-' + startArr[1] + '-' + startArr[2];
        let date = format(dateStr);

        if(getDayOfWeek(date) === day) {
            count++;
            dates.push(date);
        } 
    }

    // display results
    document.getElementById('displayResults').removeAttribute('hidden');

    let singOrPlural = (count === 1) ? ' Time' : ' Times';
    document.getElementById('results').innerText = count + singOrPlural;

    if(count > 0)
    {
        dates.forEach((date, _index, _arr) => {
            document.getElementById('dates').innerHTML += '<p>' + date + '</p>';
        });
    }
}

function getDayOfWeek(date)
{
    return date.getDay();
}

function format(str) {
    return new Date(str.replace(/-/g, '\/'));
}

window.onload = () => {
    document.querySelector('#clearBtn')?.addEventListener('click', ()=> {
        document.getElementById('results').innerText = '';
        document.getElementById('dates').innerHTML = '';
        document.getElementById('displayResults').setAttribute('hidden', 'hidden');
    });
}
