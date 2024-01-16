var subRegionsArray;
var filter;
var sortBy;
var subRegionsArray;
var text ='';
var data;

let sort = document.getElementById("sort")
sort.addEventListener("click", getSorted)

let textToFilter = document.getElementById('toFilter');
textToFilter.addEventListener("input", getSorted);

let butt1 = document.getElementById("name")
butt1.addEventListener("input", function(){
    filter = 1;
    getSorted()
})

let butt2 = document.getElementById("capital")
butt2.addEventListener("input", function(){
    filter = 2;
    getSorted()
})

let butt3 = document.getElementById("population")
butt3.addEventListener("input", function(){
    filter = 3;
    getSorted()
})

let butt4 = document.getElementById("area")
butt4.addEventListener("input", function(){
    filter = 4;
    getSorted()
})

let butt1S = document.getElementById("nameSort")
butt1S.addEventListener("input", function(){
    sortBy = 1;
})

let butt2S = document.getElementById("capitalSort")
butt2S.addEventListener("input", function(){
    sortBy = 2;
})

let butt3S = document.getElementById("populationSort")
butt3S.addEventListener("input", function(){
    sortBy = 3;
})

let butt4S = document.getElementById("areaSort")
butt4S.addEventListener("input", function(){
    sortBy = 4;
})

async function fetchInfo(){
    const response = await fetch("https://restcountries.com/v3.1/all");
    const information = await response.json();
    return information;
}

function subRegions(data){
    subRegionsArray = [];
    for( let subRegion of data){
        if(!subRegionsArray.includes(subRegion.subregion)){
            subRegionsArray.push(subRegion.subregion)
        }
    }
}

function createSubregionsContainers(){
    let section = document.querySelector("section")
    for( let elem of subRegionsArray){
        let container = document.createElement('div');
        container.setAttribute('class', 'container')

        let newElem = document.createElement("li")
        newElem.id=(elem);
        newElem.setAttribute("class", 'toRoll')
        section.appendChild(newElem)

        let newElemA = document.createElement('a');
        newElemA.setAttribute("class", "SubRegA") 
        newElemA.href = '#' + elem;
        newElemA.textContent = elem;
        if(elem == undefined){
            newElemA.textContent = "Without Subregion";
        }
        newElem.appendChild(container);
        container.appendChild(newElemA);

        let newElemPopulation = document.createElement('a');
        newElemPopulation.setAttribute("class", "population") 
        newElemPopulation.id = "pop" + elem
        newElemPopulation.textContent = 0;
        container.appendChild(newElemPopulation);

        let newElemArea = document.createElement('a');
        newElemArea.setAttribute("class", "area") 
        newElemArea.textContent = 0;
        newElemArea.id = "area" + elem
        container.appendChild(newElemArea);

        let newElemDiv = document.createElement('div');
        newElemDiv.setAttribute("class", "rollMenu");
        newElemDiv.id= "rollMenu" + elem;
        newElem.appendChild(newElemDiv);
    }
}

function appendCountryToSubregion(array){
    for(let country of array){
        if(!filterBy(country)){
            continue;
        }
        let container = document.createElement("div")
        container.setAttribute("class", "container");
        container.id = "place" + country.name.official;
        let place = document.getElementById("rollMenu" + country.subregion)

        let nbOfPop = document.getElementById("pop" + country.subregion)
        let nbOfArea = document.getElementById("area" + country.subregion)
        nbOfArea.textContent = parseInt(nbOfArea.textContent) + country.area;
        nbOfPop.textContent = parseInt(nbOfPop.textContent) + country.population; 

        let newElem0 = document.createElement("img");
        newElem0.setAttribute("class", "image")
        newElem0.src = country.flags.png;

        let newElem1 = document.createElement("a");
        newElem1.textContent = country.name.official;
        newElem1.setAttribute("class", "name")
        
        let newElem2 = document.createElement("a");
        newElem2.textContent = country.capital;
        newElem2.setAttribute("class", "capital");
        
        let newElem3 = document.createElement("a");
        newElem3.textContent = country.population;
        newElem3.setAttribute("class", "population")
        
        let newElem4 = document.createElement("a");
        newElem4.textContent = country.area;
        
        newElem4.setAttribute("class", 'area');
        container.appendChild(newElem0);
        container.appendChild(newElem1);
        container.appendChild(newElem2);
        container.appendChild(newElem3);
        container.appendChild(newElem4);
        place.appendChild(container)
    }
}

function filterBy(elem){
    var toCompare;
    switch(filter){
        case 1:
            toCompare = elem.name.official;
            break;
        case 2:
            toCompare = elem.capital;
            break;
        case 3:
            toCompare = elem.population;
            break;
        case 4:
            toCompare = elem.area;
            break;
        default:
            toCompare = elem.name.official;
            break;
    }
  
    if (toCompare == undefined || !toCompare.toString().startsWith(text)){
        return false;
    }
    else{
        return true;
    }
} 

async function loadPage(){
    data = await fetchInfo();
    subRegions(data);
    createSubregionsContainers()
    appendCountryToSubregion(data)
}

function getSorted(){
    let toSort = [];
    for (let city of data) {
        toSort.push(city);
    }
    toSort.sort(function(a, b) {
        switch(sortBy){
            case 1:
                toCompareA = a.name.official;
                toCompareB = b.name.official;
                break;
            case 2:
                toCompareA = a.capital;
                toCompareB = b.capital;
                break;
            case 3:
                toCompareA = a.population;
                toCompareB = b.population;
                break;
            case 4:
                toCompareA = a.area;
                toCompareB = b.area
                break;
            default:
                toCompareA = a.name.official;
                toCompareB = b.name.official;
                break;
        }
        if(toCompareA == null){
            return -1;
        }
        if (toCompareA > toCompareB){
            return 1
        }
        if (toCompareA < toCompareB){
            return -1
        }
        return 0
    });
    doFilter(toSort) 
}
function doFilter(array){
    text = document.getElementById("toFilter").value
    document.querySelector("section").remove()
    let newElem = document.createElement("section")
    let body = document.querySelector("body");
    body.appendChild(newElem)
    createSubregionsContainers()
    appendCountryToSubregion(array)
}


loadPage();