/* Global Variables */
const apiKy='7a31279c19cabbd7b9bdda0138916fa9'
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
let gen=document.getElementById('generate')
gen.addEventListener('click', async () => {
    try {
        let feel = document.getElementById('feelings').value
        let zcode = document.getElementById('zip').value
        const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zcode}&appid=${apiKy}`
        const res = await fetch(url).then(res => res.json())
        let k = await res.main.temp
        let c = k - 273.15
        console.log(c)
        await fetch('/addWeather', {
            method: 'post',
            headers: {
                'content-Type': "application/json"
            },
            body:JSON.stringify({
                newDate,
                c,
                feel
            })
        })
        let dta = await fetch('/getWeather').then(res => res.json())
        document.getElementById('date').innerHTML=dta.date //help
        document.getElementById('content').innerHTML=dta.feel
        document.getElementById('temp').innerHTML=dta.c
    }
    catch(e){console.error('Error found',e)}
})