let table = document.querySelector('#bagua-table')
let editTd = null
table.addEventListener('click', (event) => {
    let target = event.target.closest('td,button')
    if (!table.contains(target)) return
    if (target.dataset.type== 'ok') editOk(editTd.td)
    else if (target.dataset.type == 'cancel') editCancel(editTd.td)
    else if (target.tagName == 'TD') {
        if(!editTd) editingTd(target)
        else return
    }
})

function editingTd(td){

    editTd = {
        td: td,
        data: td.innerHTML
    }
    td.classList.add('edit-td')

    let textarea = document.createElement('textarea')
    textarea.style.width = '100%'
    textarea.style.height = '100%'
    textarea.className = 'edit-area'

    textarea.value = td.innerHTML
    td.innerHTML = ''
    td.appendChild(textarea)
    textarea.focus()
    td.insertAdjacentHTML("beforeEnd",
    '<div class="edit-controls"><button data-type="ok">OK</button><button data-type="cancel">CANCEL</button></div>')
}

function editCancel(td){
    td.innerHTML = editTd.data
    td.classList.remove('edit-td')
    editTd = null
}

function editOk(td){
    td.innerHTML = td.firstChild.value
    td.classList.remove('edit-td')
    editTd = null
}