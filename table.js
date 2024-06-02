// Helper to create a td element with the given text
function td(content) {
    let res = document.createElement("td");
    res.innerText = content;
    return res;
}

function buildTable(data, section) {
    var width = window.innerWidth;
    let table = document.getElementById("parts-table");
    // initialize selection buttons and reset to default
    var i;
    var j;

    var sections = [];
    for (i = 1; i < 6; i++) {
        document.getElementById("select" + i).style.display = "inline-block";
        document.getElementById("select" + i).src = "image/unselected.png"
        sections[i] =  document.getElementsByName("section" + i);
    }
    // get elements by section
    for (j = 1; j < 6; j++) {
        for (i = 0; i < sections[j].length; i++) {
            sections[j][i].style.display="none";
        }
    }
    if (width > 1000 && section != 1 && section != 2) {
        section = 1;
    }
    if (width > 1000 && section == 1) { // Check if fullscreen/desktop to display full page
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.location),
                    td(part.description),
                    td(part.footprint),
                    td(formatTolerance(part)),
                    td(part.ratingA),
                    td(part.ratingV),
                    td(part.ratingW),
                );
                return tr;
            })
        );
        document.getElementById("select1").src = "image/selected.png"
        document.getElementById("select3").style.display = "none";
        document.getElementById("select4").style.display = "none";
        document.getElementById("select5").style.display = "none";
        for (i = 0; i < sections[1].length; i++) {
            sections[1][i].style.display="table-cell";
        }
        for (i = 0; i < sections[2].length; i++) {
            sections[2][i].style.display="table-cell";
        }
        for (i = 0; i < sections[3].length; i++) {
            sections[3][i].style.display="table-cell";
        }
    } else if (width > 1000 && section == 2) { // Check if fullscreen/desktop to display full page
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.projects),
                    td(part.digikey),
                    td(part.date),
                    td(part.image),
                );
                return tr;
            })
        );
        document.getElementById("select2").src = "image/selected.png"
        document.getElementById("select3").style.display = "none";
        document.getElementById("select4").style.display = "none";
        document.getElementById("select5").style.display = "none";
        for (i = 0; i < sections[4].length; i++) {
            sections[4][i].style.display="table-cell";
        }
        for (i = 0; i < sections[5].length; i++) {
            sections[5][i].style.display="table-cell";
        }
    } else if (section == 1) { // replace table collumns based on section
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.location),
                    td(part.description),
                );
                return tr;
            })
        );
        for (i = 0; i < sections[1].length; i++) {
            sections[1][i].style.display="table-cell";
        }
        document.getElementById("select1").src = "image/selected.png"
    } else if (section == 2) {
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.footprint),
                    td(formatTolerance(part)),
                );
                return tr;
            })
        );
        for (i = 0; i < sections[2].length; i++) {
            sections[2][i].style.display="table-cell";
        }
        document.getElementById("select2").src = "image/selected.png"
    } else if (section == 3) {
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.ratingA),
                    td(part.ratingV),
                    td(part.ratingW),
                );
                return tr;
            })
        );
        for (i = 0; i < sections[3].length; i++) {
            sections[3][i].style.display="table-cell";
        }
        document.getElementById("select3").src = "image/selected.png"
    } else if (section == 4) {
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.projects),
                    td(part.digikey),
                );
                return tr;
            })
        );
        for (i = 0; i < sections[4].length; i++) {
            sections[4][i].style.display="table-cell";
        }
        document.getElementById("select4").src = "image/selected.png"
    } else if (section == 5) {
        table.replaceChildren(table.children[0],
            ...data.map(part => {
                let tr = document.createElement("tr");
                tr.replaceChildren(
                    td(formatValue(part)),
                    td(part.date),
                    td(part.image),
                );
                return tr;
            })
        );
        for (i = 0; i < sections[5].length; i++) {
            sections[5][i].style.display="table-cell";
        }
        document.getElementById("select5").src = "image/selected.png"
    }
}
