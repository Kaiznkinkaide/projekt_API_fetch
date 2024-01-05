fetch("https://picsum.photos/v2/list")
.then((response) => response.json())
.then((data) => {
    console.log(data);
    const products = data
    console.log(products);

    products.forEach((product) =>{
        const author = product.author
        const img = product.url
        const downloadImg = product.download_url
        const imgWidth = product.width
        const imgHeight = product.height
        const id = Number(product.id)
        console.log(id);

        let productItem = document.createElement('div')

        const prductImg = document.createElement("img")
            prductImg.setAttribute("src", downloadImg)
            prductImg.setAttribute("width", `${imgWidth / 12}px`)
            prductImg.setAttribute("height", `${imgHeight / 12}px`)
            productItem.appendChild(prductImg)
            console.log(prductImg);

        let h2 = document.createElement('h2')
            h2.textContent = author
            productItem.appendChild(h2)

        let moreInfoBtn = document.createElement("button") 
        moreInfoBtn.textContent = "See more"
        moreInfoBtn.addEventListener("click",() =>{
            window.open(img)
            }) 
        productItem.appendChild(moreInfoBtn)
        document.querySelector("#products").appendChild(productItem)
    })
})
.catch((error) => console.log("die Küche brennt leider", error))