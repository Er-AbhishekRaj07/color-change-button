const heading = document.getElementById('heading');
const button = document.getElementById('changeColorButton');

button.addEventListener('click', () => {
    // Generate a random color
    const randomColorforHeading = '#' + Math.floor(Math.random()*16777215).toString(16);
    const randomColorforbutton='#'+Math.floor(Math.random()*16777215).toString(16);
    heading.style.color = randomColorforHeading;
    //button.style.color=randomColorforbutton;
});
