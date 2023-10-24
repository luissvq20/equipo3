// Escuchar clic en el encabezado para mostrar/ocultar el contenido
const dropdownHeader = document.getElementById('dropdown-header');
const dropdownContent = document.getElementById('dropdown-content');

dropdownHeader.addEventListener('click', function () {
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }
});

const dropdownHeader1 = document.getElementById('dropdown-header1');
const dropdownContent1 = document.getElementById('dropdown-content1');

dropdownHeader1.addEventListener('click', function () {
    if (dropdownContent1.style.display === 'none' || dropdownContent1.style.display === '') {
        dropdownContent1.style.display = 'block';
    } else {
        dropdownContent1.style.display = 'none';
    }
});

const dropdownHeader2 = document.getElementById('dropdown-header2');
const dropdownContent2 = document.getElementById('dropdown-content2');

dropdownHeader2.addEventListener('click', function () {
    if (dropdownContent2.style.display === 'none' || dropdownContent2.style.display === '') {
        dropdownContent2.style.display = 'block';
    } else {
        dropdownContent2.style.display = 'none';
    }
});

const dropdownHeader3 = document.getElementById('dropdown-header3');
const dropdownContent3 = document.getElementById('dropdown-content3');

dropdownHeader3.addEventListener('click', function () {
    if (dropdownContent3.style.display === 'none' || dropdownContent3.style.display === '') {
        dropdownContent3.style.display = 'block';
    } else {
        dropdownContent3.style.display = 'none';
    }
});

const dropdownHeader4 = document.getElementById('dropdown-header4');
const dropdownContent4 = document.getElementById('dropdown-content4');

dropdownHeader4.addEventListener('click', function () {
    if (dropdownContent4.style.display === 'none' || dropdownContent4.style.display === '') {
        dropdownContent4.style.display = 'block';
    } else {
        dropdownContent4.style.display = 'none';
    }
});
