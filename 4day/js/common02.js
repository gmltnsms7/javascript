// jquery ajax
const resultList = $("#result ul");
const btnSearch = $("#searchBox .btnSearch");
const search = $("#searchBox #search");

btnSearch.on("click", function () {
    const searchWord = search.val();
    loadSearch(searchWord);
});

search.on("keyup", function (e) {
    if (e.keyCode === 13) {
        const searchWord = search.val();
        loadSearch(searchWord);
    }
});

function loadSearch(psearchWord) {
    $.ajax({
        url: "https://dapi.kakao.com/v2/search/vclip",
        headers: {
            Authorization: "KakaoAK 8eaa10ac6fc8ac5406d3bce2ad4624fb",
        },
        data: {
            query: psearchWord,
            size: 30,
        },
    }).done(function (response) {
        const documents = response.documents;
        //const blog = documents.filter(function (item, idx) {
        //    return item.collection === "blog";
        //});
        console.log(documents);
        let tempHtml = "";
        $.each(documents, function (idx, item) {
            tempHtml += `
        <li>
          <a href="${item.url}" data-fancybox="gallery" data-caption="${item.title}">
            <img src="${item.thumbnail}" alt="">
  
          </a>
        </li>
   `;
        });
        resultList.html(tempHtml); //돔완성
        gsap.from("#result ul li", {
         scale :0,
          stagger : {
            amount : 2,
          }
        })
    });  
    
}
