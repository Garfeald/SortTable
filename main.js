

const mock = [
    {
        1: 1,
        2: "",
        3: 3000,
        4: 24,
        5: "",
        6: "",
        7: 55,
        8: "https://i.ibb.co/Prq0ZJ2/author-img-2.png",
        9: 1,
        10: "",
        11: 3000,
        12: 24,
        13: "",
        14: "",
        15: 55,
        16: "https://i.ibb.co/SRbYDWJ/author-img.png"
    }
]

const random = Math.floor((Math.random() * 100) + 1);

let tableContent = document.getElementById('tbody').innerHTML

const createTr = () => {
    for(let i = 1; i <= 50; i++) {
        const abc = "abcdefghijklmnopqrstuvwxyz";
        var randomWords = "";
        while (randomWords.length < 8) {
            randomWords += abc[Math.floor(Math.random() * abc.length)];
        }
        mock.map((item) => {
            document.getElementById('tbody').innerHTML += 
        `
            <tr class="table-data" id="table-data">
                <td draggable="true" id="item" class="table-data_item1 drop">${i}</td>
                <td draggable="true" id="" class="table-data_item2 drop">${item[2] + randomWords}</td>
                <td draggable="true" id="price" class="table-data_item3 drop">₽${item[3] + i}</td>
                <td id="">${item[4] + i}</td>
                <td id="">${item[5] + randomWords}</td>
                <td id="">${item[6] + randomWords}</td>
                <td id="">$${item[7] + i}</td>
                <td id=""><img src="${item[8]}" class="table-img" /></td>
                <td id="">${i}</td>
                <td id="">${item[10] + randomWords}</td>
                <td id="">₽${item[11] + i}</td>
                <td id="">${item[12] + i}</td>
                <td id="">${item[13] + randomWords}</td>
                <td id="">${item[14] + randomWords}</td>
                <td id="">₽${item[15] + i}</td>
                <td id=""><img src="${item[16]}" class="table-img" /></td>
            </tr>
            
        `
        })
    }
}

createTr()

new Tablesort(document.getElementById('table'))

    // !!!!! Filters !!!!! //

$('.table-filters input').on('input', function () {
        filterTable($(this).parents('table'));
    });
    
    function filterTable(table) {
        let filters = table.find('.table-filters td');
        let rows = table.find('.table-data');
        rows.each(function (rowIndex) {
            var valid = true;
            $(this).find('td').each(function (colIndex) {
                if (filters.eq(colIndex).find('input').val()) {
                    if ($(this).html().toLowerCase().indexOf(
                    filters.eq(colIndex).find('input').val().toLowerCase()) == -1) {
                        valid = valid && false;
                    }
                }
            });
            if (valid === true) {
                $(this).css('display', '');
            } else {
                $(this).css('display', 'none');
            }
        });
}

/////


const totalRows = () => {
    const rows = document.getElementById('tbody').childElementCount
    const str = document.getElementById('tbody').value.split('\n').length;
    console.log(rows, str)
}

const useEffect = document.getElementById('filter1').addEventListener('input', () => {
    totalRows();
})

    
        
        



