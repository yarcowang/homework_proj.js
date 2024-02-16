const IMAGE_SERVER_ROOT = 'https://5de259ba-eaad-44ee-8874-c3a22acf48c4.mock.pstmn.io/images'
let pageinfo = {
    page: 1,
    size: 9
}

let get_data = async (init = true) => {
    let res = await axios.get(`${IMAGE_SERVER_ROOT}?page=${init ? pageinfo.page : ++pageinfo.page}&size=${pageinfo.size}`)

    if (res.data && res.data.items) {
        const images = res.data.items.map((i) => {
            const tpl = `<div>
          <img class="" src="${i}" />
        </div>`
            return tpl
        }).join('')
        document.getElementById('images').innerHTML += images
    }
}

window.onload = async () => {
    // console.log(`https://some/?page=${pageinfo.page}&size=${pageinfo.size}`)
    await get_data()
}

window.addEventListener('wheel', async () => {
    await get_data(false)
})



