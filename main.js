document.addEventListener('DOMContentLoaded', init);

function init() {
    let RanNum = Math.floor(Math.random() * 5) + 5;
    console.log(RanNum);

    let main = document.querySelector("main");
    let x = document.createElement('p');
    // main.appendChild(x);
    x.textContent = RanNum;

    let url = `https://picsum.photos/v2/list?limit=${RanNum}`;
    fetch(url)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(images => {
            images.forEach(image => {
                let img = document.createElement('img');


                img.alt = image.author;
                let imgWidth = image.width;
                let imgHeight = image.height;
                let url = image.download_url;

                let h = imgHeight.toString();
                let w = imgWidth.toString();

                
                url = url.replace(w, "400");
                url = url.replace(h, "300");
                console.log(url);
                
                img.src = url;
                main.appendChild(img);

            });
        })
        .catch(() => {});
}