type BikeResponse = {
    id: number;
    brand: string;
};

export function createBikesContainer(): HTMLDivElement {
    const container = document.createElement("div") as HTMLDivElement;
    container.className = "container";

    const header = document.createElement("h3") as HTMLHeadingElement;
    header.innerText = "Bikes";

    container.appendChild(header);

    const bikesDiv = document.createElement("div") as HTMLDivElement;
    bikesDiv.id = "bikes-component";
    bikesDiv.className = "bikes";

    container.appendChild(bikesDiv);

    const btn = document.createElement("button") as HTMLButtonElement;
    btn.id = "clickme";
    btn.className = "btn";
    btn.innerText = "Get All Bikes";

    btn.addEventListener("click", async () => {
        var response = await fetch("http://localhost:3001/api/bikes");
        var bikes = (await response.json()) as BikeResponse[];

        let newTable: HTMLTableElement;
        if (document.getElementById("bike-tbl") === null) {
            newTable = createNewBikesTable(bikes);
            const target = document.getElementById("bikes-component") as HTMLDivElement;
            target.appendChild(newTable);
        }

        function createNewBikesTable(bikes: BikeResponse[]) {
            const newTable = document.createElement("table") as HTMLTableElement;
            newTable.id = "bike-tbl";
            newTable.innerHTML = "<thead><th>Id</th><th>Brand</th></thead>";
            for (let bike of bikes) {
                const newRow = document.createElement("tr") as HTMLTableRowElement;
                const tdId = document.createElement("td") as HTMLTableCellElement;
                tdId.textContent = String(bike.id);
                newRow.appendChild(tdId);

                const tdBrand = document.createElement("td") as HTMLTableCellElement;
                tdBrand.textContent = bike.brand;
                newRow.appendChild(tdBrand);

                newTable.appendChild(newRow);
            }
            return newTable;
        }
    });

    container.appendChild(btn);

    return container;
}
