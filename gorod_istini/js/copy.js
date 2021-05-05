const copyLink = (e) => {
    e.preventDefault();
    let aux = document.createElement('input');
    let url = e.target.getAttribute('href');
    aux.setAttribute('value', url);
    document.body.appendChild(aux);
    aux.select();
    document.execCommand('copy');
    document.body.removeChild(aux);
};

let link = document.querySelectorAll('.copy');


link.forEach(element => element.addEventListener('click', copyLink));
