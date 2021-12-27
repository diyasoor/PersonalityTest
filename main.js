const ready = () => {

    const name = document.getElementById('nameID').value;
    alert(`Hey ${name}, R u ready? Click 'Ok'`);

    const image = `https://joeschmoe.io/api/v1/${name}`;
    document.getElementById('images').setAttribute('src', image);
}