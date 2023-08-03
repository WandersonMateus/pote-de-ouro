function selectOption1() {
    document.getElementById('opid1').style.display = 'flex'
    document.getElementById('opid2').style.display = 'none'
    document.getElementById('opid3').style.display = 'none'
    document.getElementById('opid4').style.display = 'none'
    document.getElementById('card1').style.background = '#ecc00d'
    document.getElementById('card2').style.background = '#f0f0f0'
    document.getElementById('card3').style.background = '#f0f0f0'
    document.getElementById('card4').style.background = '#f0f0f0'
}
function selectOption2() {
    document.getElementById('opid2').style.display = 'flex'
    document.getElementById('opid1').style.display = 'none'
    document.getElementById('opid3').style.display = 'none'
    document.getElementById('opid4').style.display = 'none'
    document.getElementById('card2').style.background = '#ecc00d'
    document.getElementById('card1').style.background = '#f0f0f0'
    document.getElementById('card3').style.background = '#f0f0f0'
    document.getElementById('card4').style.background = '#f0f0f0'
}
function selectOption3() {
    document.getElementById('opid3').style.display = 'flex'
    document.getElementById('opid1').style.display = 'none'
    document.getElementById('opid2').style.display = 'none'
    document.getElementById('opid4').style.display = 'none'
    document.getElementById('card3').style.background = '#ecc00d'
    document.getElementById('card1').style.background = '#f0f0f0'
    document.getElementById('card2').style.background = '#f0f0f0'
    document.getElementById('card4').style.background = '#f0f0f0'
}
function selectOption4() {
    document.getElementById('opid4').style.display = 'flex'
    document.getElementById('opid1').style.display = 'none'
    document.getElementById('opid2').style.display = 'none'
    document.getElementById('opid3').style.display = 'none'
    document.getElementById('card4').style.background = '#ecc00d'
    document.getElementById('card1').style.background = '#f0f0f0'
    document.getElementById('card2').style.background = '#f0f0f0'
    document.getElementById('card3').style.background = '#f0f0f0'
}

//Escolha 1
function escolhertVendedor1() {
    Swal.fire({
        text: '',
        width: '900px',
        height: '900px',
        title: 'Escolha um vendedor1!',
        html: '<div class="escolher-vendedor"><a href="">Vendedor 1</a><a href="">Vendedor 2</a><a href="">Vendedor 3</a><a href="">Vendedor 4</a><a href="">Vendedor 5</a></div>',
        showCancelButton: true,
        showConfirmButton: false
        })
}
//Escolha 1
//Escolha 2
function escolhertVendedor2() {
    Swal.fire({
        text: '',
        width: '900px',
        height: '900px',
        title: 'Escolha um vendedor2!',
        html: '<div class="escolher-vendedor"><a href="">Vendedor 1</a><a href="">Vendedor 2</a><a href="">Vendedor 3</a><a href="">Vendedor 4</a><a href="">Vendedor 5</a></div>',
        showCancelButton: true,
        showConfirmButton: false
        })
}
//Escolha 2
//Escolha 3
function escolhertVendedor3() {
    Swal.fire({
        text: '',
        width: '900px',
        height: '900px',
        title: 'Escolha um vendedor2!',
        html: '<div class="escolher-vendedor"><a href="">Vendedor 1</a><a href="">Vendedor 2</a><a href="">Vendedor 3</a><a href="">Vendedor 4</a><a href="">Vendedor 5</a></div>',
        showCancelButton: true,
        showConfirmButton: false
        })
}
//Escolha 3
//Escolha 4
function escolhertVendedor4() {
    Swal.fire({
        text: '',
        width: '900px',
        height: '900px',
        title: 'Escolha um vendedor2!',
        html: '<div class="escolher-vendedor"><a href="">Vendedor 1</a><a href="">Vendedor 2</a><a href="">Vendedor 3</a><a href="">Vendedor 4</a><a href="">Vendedor 5</a></div>',
        showCancelButton: true,
        showConfirmButton: false
        })
}
//Escolha 4