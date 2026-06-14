const spacing =document.getElementById('spacing');
const blur =document.getElementById("blur");
const base =document.querySelector('input[type=color]');
const image = document.querySelector('img');
base.addEventListener('change', e => {
    const newColor = e.target.value;
    const span = document.querySelector('span');
    //console.log(newColor);
    image.style.borderColor =newColor;
    span.style.color =newColor;

})

blur.addEventListener('input', e =>
    {console.log(e);
     image.style.filter = `blur(${e.target.value}px)`;
})
 spacing.addEventListener('input', e=>
 {
    const spacingValue = e.target.value;
    image.style.padding=`(${spacingValue}px)`;
 }
 )