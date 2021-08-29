const deg = 6;
    const hr = document.querySelector('#hr');
    const mn = document.querySelector('#mn');
    const sc = document.querySelector('#sc');

    setInterval(() =>
    {
    Let day = new Date();
    Let hh = day.getHours() * 30;
    Let mm = day.getMinutes() * deg;
    Let ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    })
