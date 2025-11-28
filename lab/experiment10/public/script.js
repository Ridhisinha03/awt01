function loadData() {
    fetch("/data")
        .then(res => res.json())
        .then(data => {
            const list = document.getElementById("output");
            list.innerHTML = "";

            data.forEach(row => {
                const li = document.createElement("li");
                li.textContent = `${row.name} - ${row.age} - ${row.city}`;
                list.appendChild(li);
            });
        });
}
