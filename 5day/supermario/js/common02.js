// jquery ajax
const resultList = $("#result ul");
const btnSearch = $("#searchBox .btnSearch");
const search = $("#searchBox #search");

btnSearch.on("click", function () {
  const searchWord = search.val();
  //console.log("🚀 ~ file: common.js ~ line 8 ~ searchWord", searchWord);
  loadSearch(searchWord);
});
search.on("keyup", function (e) {
  console.log(e);
  if (e.keyCode === 13) {
    const searchWord = search.val();
    loadSearch(searchWord);
  }
});
function loadSearch(pSearchWord) {
  $.ajax({
    url: "https://dapi.kakao.com/v2/search/vclip",
    data: {
      query: pSearchWord,
      size: 30,
    },
    headers: {
      Authorization: "KakaoAK 13215f3216644f68b281e1f7eda3b396",
    },
  }).done(function (response) {
    //console.log(response.documents);
    const documents = response.documents;
    const cafe = documents.filter(function (item, idx) {
      //return item.collection === "cafe";
      if (item.collection === "cafe") {
        return true;
      }
    });
    console.log(cafe);
    let tempHtml = "";
    $.each(documents, function (idx, item) {
      tempHtml += `<li>
      <a href="${item.url}" data-fancybox="gallery" data-caption="${item.title}">
        <img src="${item.thumbnail}" alt="">
      </a>
    </li>`;
    });
    console.log(tempHtml);
    resultList.html(tempHtml); //dom이 완성
    gsap.from("#result ul li", {
      scale: 0,
      stagger: {
        //each: 0.1,
        amount: 2,
      },
    });
  });
}
