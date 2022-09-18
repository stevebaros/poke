let pokemonRepository = function (h) {
    let i = [], a = document.querySelector("#modal-container");

    function b() {
        a.classList.remove("show-modal")
    }

    function b() {
        document.querySelector("#modal-container").classList.remove("is-visible")
    }

    function c(a) {
        "object" == typeof a && "name" in a && "detailsUrl" in a && i.push(a)
    }

    function d() {
        return i
    }

    function e(c) {
        let d = document.querySelector("ul"), b = document.createElement("li");
        b.classList.add("group-list-item");
        let a = document.createElement("button");
        a.innerText = c.name, a.addEventListener("click", function () {
            g(c)
        }), a.classList.add("button-class"), a.classList.add("btn"), a.classList.add("btn-primary"), a.setAttribute("data-toggle", "modal"), a.setAttribute("data-target", "#pokemon-modal"), $(a).addClass("button-class btn-block btn md"), a.classList.add("button-class"), b.appendChild(a), d.appendChild(b)
    }

    function f(a) {
        return fetch(a.detailsUrl).then(function (a) {
            return a.json()
        }).then(function (b) {
            a.imageUrl = b.sprites.front_default, a.height = b.height, a.types = b.types
        }).catch(function (a) {
            console.error(a)
        })
    }

    function g(a) {
        f(a).then(function () {
            !function (a) {
                let b = $(".modal-body"), c = $(".modal-title");
                c.empty(), b.empty();
                let e = $("<h3>" + a.name + "</h3>"), d = $('<img class="pokemon-img">');
                d.attr("src", a.imageUrl);
                let f = $("<p>Height: " + a.height + "</p>"), g = $("<p>Weight: " + a.weight + "</p>"),
                    h = $("<p>Types: " + a.types + "</p>"), i = $("<p>Abilities: " + a.abilities + "</p>");
                c.append(e), b.append(d), b.append(f), b.append(g), b.append(h), b.append(i);
                let j = $(this).attr("data-target");
                $(j).modal("show")
            }(a), console.log(a)
        })
    }

    return window.addEventListener("keydown", c => {
        "Escape" === c.key && a.classList.contains("show-modal") && b()
    }), window.addEventListener("keydown", c => {
        "Escape" === c.key && a.classList.contains("is-visible") && b()
    }), a.addEventListener("click", c => {
        c.target === a && b()
    }), {
        add: c, getAll: d, showAll: function () {
            i.forEach(function (a) {
                e(a)
            })
        }, addListItem: e, loadList: function () {
            return fetch("https://pokeapi.co/api/v2/pokemon/?limit=150").then(function (a) {
                return a.json()
            }).then(function (a) {
                a.results.forEach(function (a) {
                    c({name: a.name, detailsUrl: a.url})
                })
            }).catch(function (a) {
                console.error(a)
            })
        }, loadDetails: f, showDetails: g
    }
}();
pokemonRepository.loadList().then(function () {
    pokemonRepository.showAll(), pokemonRepository.getAll().forEach(function (a) {
    })
})
