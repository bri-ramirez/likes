var likes = [9,12,9];

function addLike(indice){
    likes[indice]++;

    console.log(likes);

    var span = document.querySelector("#likes" + indice)

    span.innerHTML = likes[indice]
}