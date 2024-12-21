let students = [
    { id: 1, name: 'Hari', email: 'hari12@gmail.com', address: 'Ktm' },
    { id: 2, name: 'Aakriti', email: 'aakritine22@gmail.com', address: 'Ktm' },
    { id: 3, name: 'kritika', email: 'kritikane22@gmail.com', address: 'Ktm' },
]
function show() {
    let output = '';
    students.map((students, key) => {
        output += `
         <tr>
                    <th>${key + 1}</th>
                    <th>${students.name}</th>
                    <th>${students.email}</th>
                    <th>${students.address}</th>
                    <th>
                        <button>Edit</button>
                        <button>Delete</button>
                     </th>
                </tr>`
    })
    document.getElementById('result').innerHTML=output;
}
show()