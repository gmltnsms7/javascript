//cors
const coronaList = $("#chart02 ul");
$.ajax({
  url: "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson",
  data: {
    ServiceKey:
      "Wnus4QpirWGI56CfvzMWDIDHMRL/mEF/qTl9gwVNbRggLYTGPFIdwBy0L51B+27d5QRbLanNmIAxPwNvl7dKPA==",
    _type: "json",
  },
}).done(function (data) {
  //console.log(data.response.body.items.item);
  const itemList = data.response.body.items.item;
  const cities = [];
  const incDecList = [];
  let tempHtml = "";
  $.each(itemList, function (idx, item) {
    tempHtml += `<li><p class="city">${item.gubun}</p><p class="incDec">${item.incDec}</p></li>`;
  });
  coronaList.html(tempHtml);
});
